import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '모든 리뷰',
  description: '모든 리뷰 페이지에서 다양한 사용자 리뷰를 확인해보세요.',
};

export default function ReviewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
