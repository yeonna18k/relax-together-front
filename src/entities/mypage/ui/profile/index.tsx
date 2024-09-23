'use client';
import { useUserInfoList } from '@/entities/mypage/api';
import { User } from '@/entities/mypage/model/user';
import MypageImage from '@/entities/mypage/ui/common/MypageImage';
import EditProfileButton from '@/entities/mypage/ui/profile/EditProfileButton';
import UserInfoContainer from '@/entities/mypage/ui/profile/UserInfoContainer';
import { Skeleton } from '@/shared/ui/skeleton';
import { AxiosResponse } from 'axios';

interface ProfileProps {
  user?: AxiosResponse<User, any>;
}
export default function Profile({ user }: ProfileProps) {
  const userInfoList = useUserInfoList(user);
  return (
    <section className="mb-8 mt-4 flex h-[140px] w-full items-center justify-between gap-0 rounded-xl border border-green-200 px-[14px] md:mb-[28px] md:mt-6 md:gap-4 md:px-5 lg:mb-[52px] lg:mt-11 lg:px-[54px]">
      <MypageImage image={user?.data.image} />
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
