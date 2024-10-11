import { verifyTokenApiService } from '@/entities/auth/api/service/VerifyTokenApiService';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

const FALLBACK_URL = '/gatherings';
const withAuthList = ['/mypage'];

const getEmail = async (token: string | null) => {
  const response = await verifyTokenApiService.verifyToken(token);
  return response.data.email;
};

export async function middleware(req: NextRequest, event: NextFetchEvent) {
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

  if (url.pathname === '/reset-password') {
    const token = url.searchParams.get('token');
    try {
      const email = await getEmail(token);
      console.log('🚀 ~ middleware ~ email:', email);
      url.searchParams.set('email', email);
      // return NextResponse.redirect;
    } catch (error) {
      // return NextResponse.redirect('/signin');
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
