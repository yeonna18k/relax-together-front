import Image from 'next/image';

interface ResponsiveLoginUserProps {
  image?: string;
  name: string;
}
export default function ResponsiveLoginUser({
  image,
  name,
}: ResponsiveLoginUserProps) {
  return (
    <div className="flex gap-4 py-4">
      <Image
        priority
        src={image ?? '/assets/responsive-default-user.svg'}
        alt="user"
        width={60}
        height={60}
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-gray-600">안녕하세요!</p>
        <p className="text-2xl font-semibold text-gray-700">{name}님</p>
      </div>
    </div>
  );
}
