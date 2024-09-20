'use client';
import useUserInfo from '@/entities/mypage/api';
import useMswApiMock from '@/shared/hooks/useMswApiMock';

import PageTitle from '@/entities/mypage/ui/main/PageTitle';
import Profile from '@/entities/mypage/ui/profile';
import { UserInfoTextProps } from '@/entities/mypage/ui/profile/UserInfoText';

export default function Mypage() {
  //NOTE: msw api mock 및 useQuery 사용 예시
  useMswApiMock();
  const { user, isLoading } = useUserInfo();
  const userInfos: Array<UserInfoTextProps> = [
    {
      category: 'company.',
      value: '',
    },
    {
      category: 'E-mail.',
      value: '',
    },
  ];
  return (
    <section className="flex h-screen w-full justify-center">
      <div className="w-full px-4 pt-6 md:px-6 md:pt-[22px] xl:max-w-[1200px] xl:px-[102px]">
        <PageTitle title="마이 페이지" />
        {user ? <Profile name={user?.data.name} userInfo={userInfos} /> : <></>}
      </div>
    </section>
  );
}
