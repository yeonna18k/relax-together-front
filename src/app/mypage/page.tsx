'use client';

import { useUserData } from '@/entities/mypage/api';
import PageTitle from '@/entities/mypage/ui/main/PageTitle';
import Profile from '@/entities/mypage/ui/profile';
import ProfileUpdateModal from '@/entities/mypage/ui/profile-update-modal';
import TabSection from '@/entities/mypage/ui/tab-section';
import { Suspense } from 'react';

export default function Mypage() {
  const { user } = useUserData();
  return (
    <div className="flex h-[calc(100vh-60px)] w-full justify-center lg:h-[calc(100vh-75px)]">
      <div className="w-full px-4 pt-6 md:px-6 md:pt-[22px] xl:max-w-[1200px] xl:px-[102px]">
        <PageTitle title="마이 페이지" />
        <Profile user={user} />
        <Suspense fallback={null}>
          <TabSection />
        </Suspense>
        <ProfileUpdateModal user={user} />
      </div>
    </div>
  );
}
