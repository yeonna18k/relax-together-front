import AuthImage from '@/entities/auth/ui/AuthImage';
import SignupForm from '@/entities/signup/ui/SignupForm';
import SignupHeader from '@/entities/signup/ui/SignupHeader';

export default function Signup() {
  return (
    <>
      <div>
        <SignupHeader />
        <AuthImage />
      </div>
      <SignupForm />
    </>
  );
}
