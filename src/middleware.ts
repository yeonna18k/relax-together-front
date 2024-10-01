import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname === '/mypage' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'my-gatherings');
    return NextResponse.redirect(url);
  }
  if (url.pathname === '/gatherings' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/gatherings', '/mypage'],
};
