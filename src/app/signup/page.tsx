import AuthImage from '@/entities/signup/ui/AuthImage';
import SignupForm from '@/entities/signup/ui/SignupForm';
import SignupHeader from '@/entities/signup/ui/SignupHeader';

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
