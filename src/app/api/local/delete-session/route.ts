import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

    let sessionName = "local_session";
    if (process.env.SESSION_NAME) {
        sessionName = process.env.SESSION_NAME;
    };

    const response = NextResponse.json({ message: "OK" }, { status: 201 });
    
    // サーバーサイドクッキーを削除
    response.cookies.delete(sessionName);

    console.log("Local API Delete Session OK!");
    return response;
};