import AuthSvgImage from '@/shared/assets/auth-img.svg';

export default function AuthImage() {
  return (
    <div className="mb-5 flex justify-center md:mb-[30px]">
      <AuthSvgImage className="w-[290px] md:w-[410px] xl:w-[600px]" />
    </div>
  );
}
