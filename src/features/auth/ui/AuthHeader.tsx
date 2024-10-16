export interface SigninHeaderProps {
  title: React.ReactNode;
  content: React.ReactNode;
}
export default function SigninHeader({ title, content }: SigninHeaderProps) {
  return (
    <div className="mb-[50px] flex flex-col justify-center gap-3 text-center text-gray-800 md:mb-[28px] lg:mb-[70px] lg:gap-4">
      <div className="text-xl font-semibold md:text-2xl lg:text-3xl lg:font-bold">
        {title}
      </div>
      <div className="whitespace-pre-line text-sm font-medium md:text-base lg:text-lg">
        {content}
      </div>
    </div>
  );
}
