import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비밀번호 찾기',
  description:
    '비밀번호 찾기 페이지에서 비밀번호를 재설정할 수 있는 링크를 이메일로 받아보세요.',
};

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
