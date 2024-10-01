import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ResponsiveLoginUserProps {
  image?: string;
  name: string;
}
export default function ResponsiveLoginUser({
  image,
  name,
}: ResponsiveLoginUserProps) {
  const router = useRouter();
  return (
    <div className="flex gap-4 py-4">
      <Image
        priority
        src={image ?? '/assets/responsive-default-user.svg'}
        alt="user"
        width={60}
        height={60}
        className="cursor-pointer"
        onClick={() => router.push('/mypage')}
      />
      <div className="flex cursor-default flex-col gap-1">
        <p className="text-sm font-medium text-gray-600">안녕하세요!</p>
        <p
          className="cursor-pointer text-2xl font-semibold text-gray-700"
          onClick={() => router.push('/mypage')}
        >
          {name}님
        </p>
      </div>
    </div>
  );
}
