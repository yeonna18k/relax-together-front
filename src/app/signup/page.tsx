import AuthImage from '@/entities/auth/ui/AuthImage';
import SignupForm from '@/entities/signup/ui/SignupForm';
import SignupHeader from '@/entities/signup/ui/SignupHeader';

export default function Signup() {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col px-4 pt-[39px] md:pt-[54px] lg:h-[calc(100vh-80px)] xl:flex-row xl:items-center xl:justify-center xl:gap-16">
      <div>
        <SignupHeader />
        <AuthImage />
      </div>
      <SignupForm />
    </div>
  );
}
