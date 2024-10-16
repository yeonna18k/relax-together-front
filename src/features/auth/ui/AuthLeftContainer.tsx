import AuthHeader, { SigninHeaderProps } from '@/features/auth/ui/AuthHeader';
import AuthImage from '@/features/auth/ui/AuthImage';

export default function AuthLeftContainer({
  title,
  content,
}: SigninHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center lg:h-[720px]">
      <AuthHeader title={title} content={content} />
      <AuthImage />
    </div>
  );
}
