'use client'
import { useAuthContext } from '@/contexts/authContext'
import NextLink from "next/link"
//import { useRouter } from "next/navigation"

export default function CheckCertification() {
    const {
        firebaseUser,
        currentUser,
        loading,
        certification,
        logout,
    } = useAuthContext();

  // ログアウトボタン
  const logoutSubmit = async (): Promise<void>  => {
    await logout();
  };

  // 再認証ボタン（サーバーサイドクッキーで認証）
  const certificationSubmit = async (): Promise<void>  => {
    await certification();
  };

  return (
    <>
      <h1>状態確認ページ</h1>
      <br />
      <h2>ロード：{ loading == true ? "...読み込み中" : "" }</h2>
      <br />
      <h2>firebaseUserの状態：{ firebaseUser ? "ログイン済み" : "未ログイン" }</h2>
      <br />
      <h2>currentUserの状態：{ currentUser ? "ログイン済み" : "未ログイン" }</h2>
      <br />
      <h2>ユーザー情報</h2>
      <p className='pl-2'>uid: { currentUser?.uid }</p>
      <p className='pl-2'>email: { currentUser?.email }</p>
      <p className='pl-2'>idToken: { currentUser?.idToken }</p>
      <p className='pl-2'>refreshToken: { currentUser?.refreshToken }</p>
      <p className='pl-2'>emailVerified: { String(currentUser?.emailVerified) }</p>
      <br />
      <button className="ml-5 px-2 bg-gray-500 rounded-xl text-white h-10"
        type="submit" onClick={logoutSubmit}>
          ログアウト
      </button>
      {/* <br />
      <br />
      <button className="ml-5 px-2 bg-green-700 rounded-xl text-white h-10"
        type="submit" onClick={certificationSubmit}>
          再認証ボタン
      </button> */}
      <br />
      <br />
      <button className="m-1 py-1 px-3 border-2 rounded-lg bg-green-700 text-white hover:opacity-50">
          <NextLink href="/signup">サインアップページを開く</NextLink>
      </button>
      <br />
      <br />
      <button className="m-1 py-1 px-3 border-2 rounded-lg bg-blue-700 text-white hover:opacity-50">
          <NextLink href="/signin">ログインページを開く</NextLink>
      </button>
      <br />
      <br />
      <button className="m-1 py-1 px-3 border-2 rounded-lg bg-yellow-500 text-white hover:opacity-50">
          <NextLink href="/emailchange">メールアドレス変更ページを開く</NextLink>
      </button>
      <br />
      <br />
      <button className="m-1 py-1 px-3 border-2 rounded-lg bg-orange-600 text-white hover:opacity-50">
          <NextLink href="/passwordreset">パスワードリセットページを開く</NextLink>
      </button>
      <br />
      <br />
      <button className="m-1 py-1 px-3 border-2 rounded-lg bg-red-700 text-white hover:opacity-50">
          <NextLink href="/check/destroy">退会用ページを開く</NextLink>
      </button>
      <br />
      <br />
    </>
  )
};