// app/api/verify-token/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    console.log('🚀 ~ POST ~ token:', token);

    if (token !== 'verify-token') {
      return NextResponse.error();
    }

    // 여기에 실제 토큰 검증 로직을 구현합니다.
    // 예를 들어, JWT를 사용한다면 다음과 같이 할 수 있습니다:
    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // 임시로 토큰이 유효하다고 가정하고 이메일을 반환합니다.
    const email = 'test@example.com';

    return NextResponse.json({ email }, { status: 200 });
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
