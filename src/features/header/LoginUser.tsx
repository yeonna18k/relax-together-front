import { useSignout } from '@/entities/auth/api';
import LogoutButton from '@/shared/common/ui/logout-button';
import useAccessToken from '@/shared/hooks/useAccessToken';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface LoginUserProps {
  image?: string;
  name: string;
}
export default function LoginUser({ image, name }: LoginUserProps) {
  const pathName = usePathname();
  console.log('🚀 ~ LoginUser ~ pathName:', pathName);
  const [isOpen, setIsOpen] = useState(false);
  const { accessToken, setAccessToken } = useAccessToken();
  const { signout } = useSignout({ accessToken });
  const clearUser = useUserDataStore(state => state.clearUser);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSignout = () => {
    signout();
    setAccessToken('');
    clearUser();
  };
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <Image
          priority
          src={image ?? '/assets/default-user.svg'}
          alt="user"
          width={32}
          height={32}
        />
        <p className="font-bold text-green-700">{name}님</p>
      </PopoverTrigger>
      <PopoverContent
        className="flex w-[142px] flex-col gap-4 rounded-xl bg-white text-base font-medium text-gray-700 shadow-lg"
        sideOffset={25}
        alignOffset={-15}
      >
        <Link
          href="/mypage"
          className={`hover:text-green-500 ${pathName === '/mypage' ? 'text-green-500' : ''}`}
        >
          마이페이지
        </Link>
        <LogoutButton />
      </PopoverContent>
    </Popover>
  );
}
