import Chevron from '@/shared/assets/icons/signin-chevron.svg';
import { Path } from '@/shared/lib/constants';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
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
  const { resetPopover } = useResponsiveGNBPopoverStore();

  const navigateToMypage = () => {
    router.push(`/${Path.mypage}`);
    resetPopover();
  };
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-4 py-4">
        <Image
          priority
          src={image ?? '/assets/responsive-default-user.svg'}
          alt="user"
          width={60}
          height={60}
          className="cursor-pointer"
          onClick={navigateToMypage}
        />
        <div className="flex cursor-default flex-col gap-1">
          <p className="text-sm font-medium text-gray-600">안녕하세요!</p>
          <p
            className="cursor-pointer text-2xl font-semibold text-gray-700"
            onClick={navigateToMypage}
          >
            {name}님
          </p>
        </div>
      </div>
      <Chevron
        width="40"
        height="40"
        className="cursor-pointer"
        fill="#626262"
        onClick={navigateToMypage}
      />
    </div>
  );
}
