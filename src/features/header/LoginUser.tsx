import { useSignout } from '@/entities/auth/api';
import useAccessToken from '@/shared/hooks/useAccessToken';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LoginUserProps {
  image?: string;
  name: string;
}
export default function LoginUser({ image, name }: LoginUserProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  // const accessToken = localStorage.getItem('accessToken') as string;
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
    <div
      className="relative flex cursor-pointer items-center gap-2"
      onClick={toggleModal}
    >
      <Image
        priority
        src={image ?? '/assets/default-user.svg'}
        alt="user"
        width={32}
        height={32}
      />
      <p className="font-bold text-green-700">{name}님</p>
      {isOpen && (
        <div className="absolute right-0 top-full w-[142px] rounded-xl bg-gray-50 text-base font-medium text-gray-800 shadow-lg">
          <div
            className="px-4 py-[10px]"
            onClick={() => router.push('/mypage')}
          >
            마이페이지
          </div>
          <div className="px-4 py-[10px]" onClick={handleSignout}>
            로그아웃
          </div>
        </div>
      )}
    </div>
  );
}
