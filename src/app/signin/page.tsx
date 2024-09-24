import AuthImage from '@/entities/auth/ui/AuthImage';
import SigninForm from '@/entities/signin/ui/SigninForm';
import SigninHeader from '@/entities/signin/ui/SigninHeader';

export default function Signin() {
  return (
    <div className="px-4 pt-[39px] md:pt-[54px]">
      <div>
        <SigninHeader />
        <AuthImage />
      </div>
      <SigninForm />
    </div>
  );
}
