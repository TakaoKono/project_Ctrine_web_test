/* FirebaseAuthの状態管理hook */
import { useState, useEffect } from 'react'
import { auth } from '@/libs/firebaseConfig'
import {
    User,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    deleteUser,
    signInWithEmailAndPassword,
    signOut,
    applyActionCode,
    confirmPasswordReset,
} from 'firebase/auth'
import axios from '@/libs/axios/axios'
import axiosLocal from '@/libs/axios/axiosLocal'
import certificationRequests from '@/libs/axios/certificationRequests'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export interface currentUser {
    uid: string | null;
    email: string | null;
    idToken: string | null;
    refreshToken: string | null;
    emailVerified: boolean | null;
};

// useFirebaseAuth関数
export default function useFirebaseAuth() {
    const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
    const [currentUser, setCurrentUser] = useState<currentUser | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Signup関数
    let signupUser: User;
    const signupWithEmail = async (args: {
        name: string;
        name_kana: string;
        email: string;
        password: string;
    }): Promise<void> => {
        setLoading(true);

        try {
            const credential = await createUserWithEmailAndPassword(auth, args.email, args.password);
            
            signupUser = credential.user;
            const idToken = await signupUser.getIdToken();
            const refreshToken = signupUser.refreshToken;

            // バックエンドAPI実行
            const url = certificationRequests.fetchSignup;
            const data = {
                name: args.name,
                name_kana: args.name_kana,
                refresh_token: refreshToken
            };
            const config = {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            };
            const res = await axios.post(url, data, config);

            // ローカル用のcookie取得処理（corsの影響のため）
            if (process.env.NODE_ENV != 'production') {
                const url_local = certificationRequests.localFetchCreateSession;
                const data_local = {
                    refresh_token: refreshToken
                };
                const config_local = {
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                };
                const res_local = await axiosLocal.post(url_local, data_local, config_local);
            };

            setLoading(false);
            router.push('/signup/completed');
            return;
            
        } catch (error) {
            console.log("Signup処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            };

            // Firebaseに作成したユーザーの削除
            await deleteUser(signupUser);

            setLoading(false);
            router.push('/signup');
            toast.error("新規会員登録ができませんでした。");
            return;
        
            throw error;
        };
    };

    // メール認証用関数
    const verificationEmail = async (
        oobCode: string
    ): Promise<void> => {
        setLoading(true);
        
        try {
            await applyActionCode(auth, oobCode);

            setLoading(false);
            router.push('/mypage');
            toast.success("メール認証が完了しました。");
            return;

        } catch (error) {
            console.log("メール認証処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            };
            
            setLoading(false);
            router.push('/signin');
            toast.error("メール認証ができませんでした。");
            return;

            throw error;
        };
    };

    // Login関数
    const loginWithEmail = async (args: {
        email: string;
        password: string;
    }): Promise<void> => {
        setLoading(true);

        try {
            const credential = await signInWithEmailAndPassword(auth, args.email, args.password);
            
            const user = credential.user;
            const idToken = await user.getIdToken();
            const refreshToken = user.refreshToken;
            const emailVerified = user.emailVerified;

            if (!emailVerified) {
                // バックエンドAPI実行
                const url1 = certificationRequests.fetchResendEmailVerification;
                const config1 = {
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Cache-Control': 'no-cache'
                    }
                };
                const res1 = await axios.get(url1, config1);

                router.push('/');
                toast.error("メール認証がされておりません。認証メールを再送しましたのでご確認下さい。");
                setLoading(false);
                return;
            };

            // バックエンドAPI実行
            const url2 = certificationRequests.fetchCreateSession;
            const data2 = {
                refresh_token: refreshToken
            };
            const config2 = {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                }
            };
            const res2 = await axios.post(url2, data2, config2);

            // ローカル用のcookie取得処理（corsの影響のため）
            if (process.env.NODE_ENV != 'production') {
                const url_local = certificationRequests.localFetchCreateSession;
                const data_local = {
                    refresh_token: refreshToken
                };
                const config_local = {
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                };
                const res_local = await axiosLocal.post(url_local, data_local, config_local);
            };

            setLoading(false);
            router.push('/mypage');
            return;

        } catch (error) {
            console.log("Login処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            }

            setLoading(false);
            router.push('/signin');
            toast.error("ログインできませんでした。");
            return;
        };
    };

    // 再認証用関数
    const certification = async (): Promise<void> => {
        setLoading(true);

        try {
            // cors影響のため環境により処理を分ける
            if (process.env.NODE_ENV == 'production') {
                // バックエンドAPI実行
                const url = certificationRequests.fetchReCertification;
                const config = {
                    withCredentials: true,
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                };
                const res = await axios.get(url, config);

                // カレントユーザーをログイン状態にする
                const currentUser: currentUser = {
                    uid: res.data.uid,
                    email: res.data.email,
                    idToken: res.data.idToken,
                    refreshToken: res.data.refreshToken,
                    emailVerified: res.data.emailVerified
                };
                setCurrentUser(currentUser);
            } else {
                const url_local = certificationRequests.localFetchCertification;
                const config_local = {
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                };
                const res_local = await axiosLocal.get(url_local, config_local);

                // カレントユーザーをログイン状態にする
                const currentUser: currentUser = {
                    uid: res_local.data.uid,
                    email: res_local.data.email,
                    idToken: res_local.data.idToken,
                    refreshToken: res_local.data.refreshToken,
                    emailVerified: res_local.data.emailVerified
                };
                setCurrentUser(currentUser);
            };

            setLoading(false);
            return ;

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }

            setLoading(false);
            return;

            throw error;
        };
    };

    // Logout関数
    const logout = async (): Promise<void> => {
        setLoading(true);

        // カレントユーザーが未ログインならスキップ
        if (!currentUser) {
            setLoading(false);
            return;
        };

        try {
            // 最新のidTokenを取得
            await certification();

            // バックエンドAPI実行
            const idToken = currentUser.idToken;
            const url = certificationRequests.fetchDeleteSession;
            const config = {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Cache-Control': 'no-cache'
                }
            };
            const res = await axios.get(url, config);
            setCurrentUser(null);

            if (firebaseUser) {
                await signOut(auth);
                setFirebaseUser(null);
            };

            // ローカル用のcookie削除処理（corsの影響のため）
            if (process.env.NODE_ENV != 'production') {
                const url_local = certificationRequests.localFetchDeleteSession;
                const config_local = {
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Cache-Control': 'no-cache'
                    }
                };
                const res_local = await axiosLocal.get(url_local, config_local);
            };

            setLoading(false);
            router.push('/');
            return;

        } catch (error) {
            console.log("Logout処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            }

            setLoading(false);
            toast.error("ログアウト処理に失敗しました。");
            return;

            throw error;
        };
    };

    // パスワードリセット用関数
    const resetAuthPassword = async (email: string): Promise<void> => {
        setLoading(true);

        try {
            // バックエンドAPI実行
            const url = certificationRequests.fetchResetAuthPassword;
            const data = {
                email: email
            };
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            };
            const res = await axios.post(url, data, config);

            setLoading(false);
            return;

        } catch (error) {
            console.log("パスワードリセット処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            };

            setLoading(false);
            toast.error("パスワードリセット処理ができませんでした。");
            return;

            throw error;
        };
    };

    // パスワードの変更適用関数
    const execConfirmPasswordReset = async (args: {
        oobCode: string;
        password: string;
    }): Promise<boolean> => {
        setLoading(true);
        
        try {
            await confirmPasswordReset(auth, args.oobCode, args.password);

            setLoading(false);
            return true;

        } catch (error) {
            console.log("パスワード変更の適用処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            };

            setLoading(false);
            return false;

            throw error;
        };
    };

    // メールアドレス変更用関数
    const updateEmail = async (email: string): Promise<void> => {
        setLoading(true);

        if (!currentUser) {
            setLoading(false);
            return;
        };

        try {
            // 最新のidTokenを取得
            await certification();

            // バックエンドAPI実行
            const uid = currentUser.uid;
            const idToken = currentUser.idToken;
            const url = certificationRequests.fetchUpdateEmail + uid;
            const data = {
                email: email
            };
            const config = {
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            };
            const res = await axios.post(url, data, config);

            // ログアウト処理が必要
            await logout();

            setLoading(false);
            router.push('/signin');
            toast.success("メールアドレスを変更しました。再ログインをお願いします。");
            return;

        } catch (error) {
            console.log("メールアドレス更新処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            };

            setLoading(false);
            toast.error("メールアドレスの変更ができませんでした。");
            return;

            throw error;
        };
    };

    // 退会用関数
    const destroyUser = async (
        password: string
    ): Promise<void> => {
        setLoading(true);

        // カレントユーザーが未ログインならスキップ
        if (!currentUser) {
            setLoading(false);
            return;
        };

        try {
            // 最新のidTokenを取得
            await certification();

            // バックエンドAPI実行
            const uid = currentUser.uid;
            const idToken = currentUser.idToken;
            const url = certificationRequests.fetchDestroyUser + uid;
            const config = {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                    'Cache-Control': 'no-cache'
                }
            };
            const res = await axios.delete(url, config);

            // ログイン状態を解除
            setCurrentUser(null);
            setFirebaseUser(null);

            // ローカル用のcookie削除処理（corsの影響のため）
            if (process.env.NODE_ENV != 'production') {
                const url_local = certificationRequests.localFetchDeleteSession;
                const config_local = {
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Cache-Control': 'no-cache'
                    }
                };
                const res_local = await axiosLocal.get(url_local, config_local);
            };

            router.push("/");
            toast.success("退会しました。");
            setLoading(false);
            return;

        } catch (error) {
            console.log("退会処理でエラー");
            if (error instanceof Error) {
                console.error(error.message);
            };
            
            toast.error("退会できませんでした。");
            router.push("/");
            setLoading(false);
            return;

            throw error;
        };
    };

    // onAuthStateChanged関数における、
    // ユーザーの状態管理用パラメータの設定
    const nextOrObserver = async (
        user: User | null
    ): Promise<void> => {
        setLoading(true);

        if (!user) {
            setLoading(false);
            return;
        };

        const currentUser: currentUser = {
            uid: user.uid,
            email: user.email,
            idToken: String(await user.getIdToken()),
            refreshToken: user.refreshToken,
            emailVerified: user.emailVerified
        };
        setCurrentUser(currentUser);
        setFirebaseUser(user);

        setLoading(false);
        return;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
        return unsubscribe;
    }, []);

    return {
        firebaseUser,
        currentUser,
        loading,
        signupWithEmail,
        verificationEmail,
        loginWithEmail,
        certification,
        logout,
        resetAuthPassword,
        execConfirmPasswordReset,
        updateEmail,
        destroyUser,
    };
}
