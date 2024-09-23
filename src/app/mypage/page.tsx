'use client';
import useMswApiMock from '@/shared/hooks/useMswApiMock';

import PageTitle from '@/entities/mypage/ui/main/PageTitle';
import Profile from '@/entities/mypage/ui/profile';

export default function Mypage() {
  //NOTE: msw api mock 및 useQuery 사용 예시
  useMswApiMock();

  return (
    <section className="flex h-screen w-full justify-center">
      <div className="w-full px-4 pt-6 md:px-6 md:pt-[22px] xl:max-w-[1200px] xl:px-[102px]">
        <PageTitle title="마이 페이지" />
        <Profile />
      </div>
    </section>
  );
}
