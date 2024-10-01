export default function SigninHeader({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="mb-[50px] flex flex-col justify-center gap-3 text-center text-gray-800 md:mb-[28px] xl:mb-[70px] xl:gap-4">
      <div className="text-xl font-semibold md:text-2xl xl:text-3xl xl:font-bold">
        {title}
      </div>
      <div className="whitespace-pre-line text-sm font-medium md:text-base xl:text-lg">
        {content}
      </div>
    </div>
  );
}
