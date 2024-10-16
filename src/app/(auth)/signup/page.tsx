import SignupForm from '@/features/auth/signup/ui/SignupForm';
import AuthLeftContainer from '@/features/auth/ui/AuthLeftContainer';

export default function Signup() {
  return (
    <>
      <AuthLeftContainer
        title="회원가입"
        content={
          <>
            지금 가입하고, 당신의 휴식과 즐거움을 위한
            <br />
            특별한 모임을 탐색하고 참여해보세요.
          </>
        }
      />
      <SignupForm />
    </>
  );
}
