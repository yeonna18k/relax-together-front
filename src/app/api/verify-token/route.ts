import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // 이메일 유효성 확인
    if (!email) {
      return NextResponse.json(
        { message: '이메일이 제공되지 않았습니다.' },
        { status: 400 },
      );
    }

    // 실제 이메일 발송 로직을 여기에 구현
    // 예: nodemailer 등을 사용하여 이메일 전송
    console.log(`이메일을 보냈습니다: ${email}`);
    return NextResponse.json(
      { message: '이메일이 성공적으로 발송되었습니다.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('이메일 발송 오류:', error);
    return NextResponse.json({ message: '이메일 발송 실패' }, { status: 500 });
  }
}
