import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지에서 계정에 접속하여 서비스를 이용해보세요.',
};

export default function SigninLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
