import SignupForm from '@/features/auth/signup/ui/SignupForm';
import AuthHeader from '@/features/auth/ui/AuthHeader';
import AuthImage from '@/features/auth/ui/AuthImage';

export default function Signup() {
  return (
    <>
      <div className="lg:h-[622px]">
        <AuthHeader
          title="회원가입"
          content={`지금 가입하고, 당신의 휴식과 즐거움을 위한\n특별한 모임을 탐색하고 참여해보세요.`}
        />
        <AuthImage />
      </div>
      <SignupForm />
    </>
  );
}
