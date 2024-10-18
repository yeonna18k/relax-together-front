import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '찜한 모임',
  description: '찜한 모임 페이지에서 찜한 모임 목록을 확인하세요.',
};

export default function LikeGatheringsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
