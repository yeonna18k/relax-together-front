import SigninForm from '@/features/auth/signin/ui/SigninForm';
import AuthHeader from '@/features/auth/ui/AuthHeader';
import AuthImage from '@/features/auth/ui/AuthImage';

export default function Signin() {
  return (
    <>
      <div>
        <AuthHeader
          title="Welcome to 같이 달램!"
          content={`바쁜 일상 속 잠깐의 휴식,\n이제는 같이 달램과 함께 해보세요`}
        />
        <AuthImage />
      </div>
      <SigninForm />
    </>
  );
}
