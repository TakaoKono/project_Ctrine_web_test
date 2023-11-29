import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

    let sessionName = "local_session";
    if (process.env.SESSION_NAME) {
        sessionName = process.env.SESSION_NAME;
    };

    const session = request.cookies.get(sessionName)?.value;

    let response;
    // sessionクッキーが無い場合はエラー
    if (!session) {
        response = NextResponse.json({ message: "Bad Request" }, { status: 400 });
        console.log("Local API Certification NG!!!");
        return response;
    };

    // APIでidTokenを取得
    const getTokenUrl = `https://securetoken.googleapis.com/v1/token?key=${process.env.FIREBASE_API_KEY}`;

    const res1 = await fetch(getTokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            "grant_type": "refresh_token",
            "refresh_token": session
        }),
    });
    const data1 = await res1.json();
    const idToken = data1.id_token;

    // APIでidTokenからuid、email、emailVerifiedを取得
    const url2 = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_API_KEY}`;
    const res2 = await fetch(url2, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            "idToken": idToken
        }),
    });
    const data2 = await res2.json();
    const uid = data2.users[0].localId;
    const email = data2.users[0].email;
    const emailVerified = data2.users[0].emailVerified;

    // レスポンスデータ作成
    const resData = {
        "uid": uid,
        "email": email,
        "idToken": idToken,
        "refreshToken": session,
        "emailVerified": emailVerified
    };

    response = NextResponse.json(resData, { status: 200 });

    console.log("Local API Certification OK!");
    return response;
};