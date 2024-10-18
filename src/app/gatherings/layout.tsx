import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '모임 찾기',
  description:
    '모임 찾기 페이지에서 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설해보세요.',
};

export default function GatheringsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
