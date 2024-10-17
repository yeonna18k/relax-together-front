import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이 페이지',
  description:
    '마이 페이지에서 사용자 정보를 관리하고, 참여한 모임과 생성한 모임, 작성한 리뷰를 확인하고 새 리뷰를 작성해보세요.',
};

export default function MypageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
