import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
  description:
    '회원가입 페이지에서 새로운 계정을 만들고 서비스를 이용해보세요.',
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
