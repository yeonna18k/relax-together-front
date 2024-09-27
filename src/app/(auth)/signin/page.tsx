import AuthImage from '@/entities/auth/ui/AuthImage';
import SigninForm from '@/entities/signin/ui/SigninForm';
import SigninHeader from '@/entities/signin/ui/SigninHeader';

export default function Signin() {
  return (
    <>
      <div>
        <SigninHeader />
        <AuthImage />
      </div>
      <SigninForm />
    </>
  );
}
