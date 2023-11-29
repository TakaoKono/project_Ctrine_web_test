// import Image from 'next/image'
'use client'
import { useAuthContext } from '@/contexts/authContext'
import NextLink from "next/link"

export default function Home() {
    const { currentUser, loading } = useAuthContext();

    return (
        <main>
            <h1>Hello World !</h1>
            <br />
            <h2>ログイン状態：{ currentUser ? "ログイン済み" : "未ログイン" }</h2>
            <h2>uid：{currentUser?.uid}</h2>
            <h2>email：{currentUser?.email}</h2>
            <br />
            <button className="m-1 py-1 px-3 border-2 rounded-lg bg-slate-400 text-white hover:opacity-50">
                <NextLink href="/check/certification">checkページを開く</NextLink>
            </button>
        </main>
    )
}
