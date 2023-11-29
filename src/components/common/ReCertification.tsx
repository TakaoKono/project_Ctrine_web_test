'use client'
import { useAuthContext } from '@/contexts/authContext'
import { useEffect } from 'react'

type Props = {
    session: string
};

export default function ReCertification({ session }: Props) {
    const { currentUser, certification } = useAuthContext();

    // 再認証処理実行
    useEffect(()=>{
        // sessionが存在しないか、currentUserが存在する場合はスキップ
        if (!session || currentUser) {
            return;
        } else {
            execReCertification();
        };
        // eslintルールを部分的に無効にする
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const execReCertification = async () => {
        await certification();
    };

    return (
        <></>
    );
};