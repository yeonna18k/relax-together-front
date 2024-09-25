'use client';

import { useUserData } from '@/entities/mypage/api/queries';
import { useUserInfoList } from '@/entities/mypage/model/hooks/useUserInfoList';
import EditProfileButton from '@/entities/mypage/ui/profile/EditProfileButton';
import UserInfoContainer from '@/entities/mypage/ui/profile/UserInfoContainer';
import { Skeleton } from '@/shared/ui/skeleton';
import Image from 'next/image';

export default function Profile() {
  const { user } = useUserData();
  const userInfoList = useUserInfoList(user);
  return (
    <section className="mb-8 mt-4 flex h-[140px] w-full items-center justify-between gap-0 rounded-xl border border-green-200 px-[14px] md:mb-[28px] md:mt-6 md:gap-4 md:px-5 lg:mb-[52px] lg:mt-11 lg:px-[54px]">
      <Image
        priority
        src={user?.data.image ?? '/assets/default-user.svg'}
        alt="user"
        width={72}
        height={72}
        className="h-[72px] w-[72px]"
      />
      <div className="ml-4 flex h-full w-full items-start justify-between md:ml-0 md:w-full md:flex-row md:items-center">
        {user ? (
          <UserInfoContainer
            name={user.data.name}
            userInfoList={userInfoList}
          />
        ) : (
          <div className="flex h-full w-full items-center pr-4">
            <Skeleton className="h-[88px] w-full md:h-10" />
          </div>
        )}
        <EditProfileButton />
      </div>
    </section>
  );
}
