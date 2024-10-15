import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { message: '토큰이 제공되지 않았습니다.' },
        { status: 400 },
      );
    }

    try {
      // JWT 토큰 검증
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
      const email = (decodedToken as any).email; // JWT에서 email 추출
      return NextResponse.json({ email }, { status: 200 });
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'TokenExpiredError') {
          return NextResponse.json(
            { message: '토큰이 만료되었습니다.' },
            { status: 401 },
          );
        }
        return NextResponse.json(
          { message: '토큰 검증 실패' },
          { status: 400 },
        );
      }
      return NextResponse.json(
        { message: '알 수 없는 오류 발생' },
        { status: 500 },
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('서버 오류:', error.message);
    } else {
      console.error('알 수 없는 서버 오류:', error);
    }
    return NextResponse.json({ message: '서버 오류' }, { status: 500 });
  }
}
