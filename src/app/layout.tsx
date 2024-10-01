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

export const metadata: Metadata = {
  title: '같이 달램',
  description:
    '유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설하고 리뷰를 생성할 수 있는 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} ${paperLogyExtraBold.variable} bg-background`}
      >
        <Provider>
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
