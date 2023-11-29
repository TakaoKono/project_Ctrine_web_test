import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

    const body = await request.json();
    const refreshToken = body.refresh_token;

    let sessionName = "local_session";
    if (process.env.SESSION_NAME) {
        sessionName = process.env.SESSION_NAME;
    };

    let secure = false;
    // productionの場合はsecureをtrueにする
    if (process.env.NODE_ENV == "production") {
        secure = true;
    };

    const response = NextResponse.json({ message: "OK" }, { status: 201 });
    
    // サーバーサイドクッキーに認証情報を付与
    response.cookies.set({
        name: sessionName,
        value: refreshToken,
        httpOnly: true,
        secure: secure,
        maxAge: 60 * 60 * 24 * 90 //90日
    });

    console.log("Local API Create Session OK!");
    return response;
};