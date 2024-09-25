import AuthImage from '@/entities/auth/ui/AuthImage';
import SigninForm from '@/entities/signin/ui/SigninForm';
import SigninHeader from '@/entities/signin/ui/SigninHeader';

export default function Signin() {
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col px-4 pt-[39px] md:px-0 md:pt-[54px] lg:h-[calc(100vh-80px)] xl:flex-row xl:items-center xl:justify-center xl:gap-[90px] xl:p-0">
      <div>
        <SigninHeader />
        <AuthImage />
      </div>
      <SigninForm />
    </div>
  );
}
