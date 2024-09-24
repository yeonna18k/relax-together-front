import SigninForm from '@/entities/signin/ui/SigninForm';
import SigninHeader from '@/entities/signin/ui/SigninHeader';

export default function Signin() {
  return (
    <div>
      <div>
        <SigninHeader />
        {/* <AuthImage /> */}
      </div>
      <SigninForm />
    </div>
  );
}
