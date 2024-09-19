import AuthImage from '@/features/signup/AuthImage';
import SignupForm from '@/features/signup/SignupForm';
import SignupHeader from '@/features/signup/SignupHeader';

export default function Signup() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:gap-16">
      <div>
        <SignupHeader />
        <AuthImage />
      </div>
      <SignupForm />
    </div>
  );
}
