import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_URL = '/gatherings';
const withAuthList = ['/mypage'];

export function middleware(req: NextRequest) {
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

  if (url.pathname === '/gatherings' && !url.searchParams.has('subPage')) {
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
  ],
};
