import AuthImage from '@/features/signup/AuthImage';
import SignupForm from '@/features/signup/SignupForm';
import SignupHeader from '@/features/signup/SignupHeader';

export default function Signup() {
  return (
    <div>
      <SignupHeader />
      <AuthImage />
      <SignupForm />
    </div>
  );
}
