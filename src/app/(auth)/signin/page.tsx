import SigninForm from '@/features/auth/signin/ui/SigninForm';
import AuthLeftContainer from '@/features/auth/ui/AuthLeftContainer';
import { Suspense } from 'react';

export default function Signin() {
  return (
    <>
      <AuthLeftContainer
        title="Welcome to 같이 달램!"
        content={
          <>
            바쁜 일상 속 잠깐의 휴식,
            <br />
            이제는 같이 달램과 함께 해보세요
          </>
        }
      />
      <Suspense fallback={null}>
        <SigninForm />
      </Suspense>
    </>
  );
}
