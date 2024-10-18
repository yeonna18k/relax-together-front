import Provider from '@/app/provider';
import Header from '@/features/header';
import Container from '@/shared/layout/Container';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const paperLogyExtraBold = localFont({
  src: '../../public/fonts/Paperlogy-8ExtraBold.ttf',
  variable: '--font-paperlogy-extrabold',
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://relax-together.web.app';
const siteName = '같이 달램';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description:
    '유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설하고 리뷰를 생성할 수 있는 서비스입니다.',
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: '같이 달램',
  },
  keywords:
    '같이 달램, 달램, 달램핏, 워케이션, 마인드풀니스, 오피스 스트레칭, 모임, 휴식, relax together, RELAX TOGETHER',
  authors: [
    {
      name: 'team2',
      url: 'https://github.com/relax-together',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    description:
      '유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설하고 리뷰를 생성할 수 있는 서비스입니다.',
    url: BASE_URL,
    siteName: siteName,
    type: 'website',
    images: [
      {
        url: '/assets/intro-content.svg',
        width: 1200,
        height: 630,
        alt: '같이 달램 소개 콘텐츠 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    description:
      '유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설하고 리뷰를 생성할 수 있는 서비스입니다.',
    images: [
      {
        url: '/assets/intro-content.svg',
        width: 1200,
        height: 630,
        alt: '같이 달램 소개 콘텐츠 이미지',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${paperLogyExtraBold.variable}`}>
        <Provider>
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
