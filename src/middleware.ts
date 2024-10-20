import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_URL = '/gatherings';
const FALLBACK_LOGIN_URL = '/signin';
const FALLBACK_FORGOT_PASSWORD_URL = '/forgot-password';
const withAuthList = ['/mypage'];
const withOutAuthList = ['/signin', '/signup', '/reset-password'];

const getEmail = async (token: string | null) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/verify-token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    },
  );
  return response.json() as Promise<{ email: string }>;
};

const getSession = async (isLoginUser?: string) => {
  const response = await fetch(
    `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://relax-together.web.app'}/api/session`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isLoginUser }),
    },
  );
  return response.json() as Promise<{ session: boolean }>;
};

export async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;
  const isLoginUser = req.cookies.get('isLoginUser')?.value;
  const { session } = await getSession(isLoginUser);

  const targetPathname = pathname.split('/')[1];
  const isWithAuth = withAuthList.includes(`/${targetPathname}`);
  const isWithOutAuth = withOutAuthList.includes(`/${targetPathname}`);
  const url = req.nextUrl.clone();

  if (isWithAuth) {
    if (!session) {
      return NextResponse.redirect(new URL(FALLBACK_URL, req.url));
    }
  }

  if (isWithOutAuth) {
    if (session) {
      return NextResponse.redirect(new URL(FALLBACK_URL, req.url));
    }
  }

  if (url.pathname === '/mypage' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'my-gatherings');
    return NextResponse.redirect(url);
  }

  if (
    url.pathname === '/reset-password' &&
    !(url.searchParams.has('token') || url.searchParams.has('email'))
  ) {
    return NextResponse.redirect(new URL(FALLBACK_LOGIN_URL, req.url));
  }

  if (url.pathname === '/reset-password' && url.searchParams.has('token')) {
    const token = url.searchParams.get('token');

    try {
      const { email } = await getEmail(token);
      if (!email) {
        throw new Error('토큰이 만료되었습니다.');
      }
      url.searchParams.delete('token');
      url.searchParams.set('email', email);
      return NextResponse.redirect(url);
    } catch (error) {
      return NextResponse.redirect(
        new URL(`${FALLBACK_FORGOT_PASSWORD_URL}?isTokenExpired=true`, req.url),
      );
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

  if (url.pathname === '/reviews' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }
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
