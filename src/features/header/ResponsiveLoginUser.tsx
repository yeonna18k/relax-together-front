import Chevron from '@/shared/assets/icons/signin-chevron.svg';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
import Image from 'next/image';
import Link from 'next/link';

interface ResponsiveLoginUserProps {
  image?: string;
  name: string;
}
export default function ResponsiveLoginUser({
  image,
  name,
}: ResponsiveLoginUserProps) {
  const { resetPopover } = useResponsiveGNBPopoverStore();

  return (
    <Link
      href="/mypage"
      className="group flex w-full items-center justify-between"
      onClick={() => resetPopover()}
      aria-label="마이페이지로 이동"
    >
      <div className="flex gap-4 py-4">
        <Image
          priority
          src={image ?? '/assets/responsive-default-user.svg'}
          alt="user"
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-full"
        />
        <div className="flex cursor-default flex-col gap-1">
          <p className="text-sm font-medium text-gray-600">안녕하세요!</p>
          <p className="cursor-pointer text-2xl font-semibold text-gray-700">
            {name}님
          </p>
        </div>
      </div>
      <Chevron
        width="40"
        height="40"
        fill="#626262"
        className="group-hover:fill-green-500"
      />
    </Link>
  );
}
