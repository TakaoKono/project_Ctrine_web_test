/* ユーザー情報共有用Context */
'use client'

import { createContext, useContext } from 'react'
import useFirebaseAuth, { currentUser } from '@/hooks/useFirebaseAuth'
import { User } from 'firebase/auth'

interface AuthContext {
    firebaseUser: User | null;
    currentUser: currentUser | null;
    loading: boolean;
    signupWithEmail: (args: {
        name: string;
        name_kana: string;
        email: string;
        password: string;
    }) => Promise<void>;
    verificationEmail: (oobCode: string) => Promise<void>;
    loginWithEmail: (args: {
        email: string;
        password: string;
    }) => Promise<void>;
    certification: () => Promise<void>;
    logout: () => Promise<void>;
    resetAuthPassword: (email: string) => Promise<void>;
    execConfirmPasswordReset: (args: {
        oobCode: string;
        password: string;
    }) => Promise<boolean>;
    updateEmail: (email: string) => Promise<void>;
    destroyUser: (password: string) => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

// ユーザー情報共有用のコンテキスト「AuthCtx」を作成
const AuthCtx = createContext({} as AuthContext);

// ユーザー情報共有用のコンポーネント
export function AuthContextProvider({ children }: AuthProviderProps) {
    // FirebaseAuthの状態を取得
    const {
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
        destroyUser
    } = useFirebaseAuth();

    // AuthContextオブジェクト定義
    const AuthContext: AuthContext = {
        firebaseUser: firebaseUser,
        currentUser: currentUser,
        loading: loading,
        signupWithEmail: signupWithEmail,
        verificationEmail: verificationEmail,
        loginWithEmail: loginWithEmail,
        certification: certification,
        logout: logout,
        resetAuthPassword: resetAuthPassword,
        execConfirmPasswordReset: execConfirmPasswordReset,
        updateEmail: updateEmail,
        destroyUser: destroyUser
    };

  return <AuthCtx.Provider value={AuthContext}>{children}</AuthCtx.Provider>;
}

// ユーザー情報共有用Context
export const useAuthContext = () => useContext(AuthCtx);