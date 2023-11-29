'use client'
import AuthEmailVerification from '@/components/auth/AuthEmailVerification'
import AuthPasswordReset from '@/components/auth/AuthPasswordReset'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export default function Auth() {
    const router = useRouter();

    // メールサービスでのエスケープ処理を戻してパラメータを取得
    const tmpPath = document.location.href;
    const tmpPath2 = tmpPath.replaceAll('&amp;', '&');
    const tmpPath3 = tmpPath2.replaceAll('?', '&');
    const queryParams = new URLSearchParams(tmpPath3);
    
    // クエリパラメータ取得
    const mode = String(queryParams.get('mode'));
    const oobCode = String(queryParams.get('oobCode'));

    useEffect(()=>{
        if (!oobCode) {
            toast.error("不正なURLです。");
            router.push("/");
        };
        return;
        // eslintルールを部分的に無効にする
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Firebaseメールアクションのタイプチェック
    const modeTypes = [
        "verifyEmail",
        "resetPassword"
    ];
    let check = false;
    for (let i = 0; i < modeTypes.length; i++) {
        if (modeTypes[i] === mode) {
            check = true;
            break;
        };
    };
    const result = check;
    useEffect(()=>{
        if (!result) {
            toast.error("不正なURLです。");
            router.push("/");
        };
        return;
        // eslintルールを部分的に無効にする
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            { mode == "verifyEmail" && <AuthEmailVerification oobCode={oobCode} /> }
            { mode == "resetPassword" && <AuthPasswordReset oobCode={oobCode} /> }
        </>
    );
};