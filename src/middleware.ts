import { BASE_URL } from '@/shared/lib/constants';
import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_URL = '/gatherings';
const withAuthList = ['/mypage'];

const getEmail = async (token: string | null) => {
  const response = await fetch(`${BASE_URL}/api/verify-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  });
  return response.json();
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoginUser = req.cookies.get('isLoginUser')?.value;

  const targetPathname = pathname.split('/')[1];
  const isWithAuth = withAuthList.includes(`/${targetPathname}`);
  const url = req.nextUrl.clone();

  if (isWithAuth) {
    if (isLoginUser === 'false') {
      return NextResponse.redirect(new URL(FALLBACK_URL, req.url));
    }

    if (url.pathname === '/mypage' && !url.searchParams.has('subPage')) {
      url.searchParams.set('subPage', 'my-gatherings');
      return NextResponse.redirect(url);
    }
  }
  if (url.pathname === '/reset-password' && url.searchParams.has('token')) {
    const token = url.searchParams.get('token');
    console.log('🚀 ~ middleware ~ token:', token);

    try {
      const response = await getEmail(token);
      console.log('🚀 ~ middleware ~ email:', response);

      url.searchParams.delete('token');
      url.searchParams.set('email', response);
      return NextResponse.redirect(url);
    } catch (error) {
      if (error instanceof Error) {
        console.error('미들웨어 오류:', error.message);
        return NextResponse.redirect(new URL(FALLBACK_URL, req.url));
      }
    }
  }

  if (url.pathname === '/gatherings' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }
  if (url.pathname === '/like-gatherings' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/gatherings',
    '/gatherings/:path*',
    '/mypage',
    '/signin',
    '/signup',
    '/reviews',
    '/like-gatherings',
    '/reset-password',
  ],
};
