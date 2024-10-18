import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비밀번호 변경',
  description: '비밀번호 변경 페이지에서 새로운 비밀번호로 변경하세요.',
};

export default function ResetPasswordPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
