'use client';

import { useUserData } from '@/entities/mypage/api';
import PageTitle from '@/entities/mypage/ui/main/PageTitle';
import Profile from '@/entities/mypage/ui/profile';
<<<<<<< HEAD
<<<<<<< HEAD
import ProfileUpdateModal from '@/entities/mypage/ui/profile-update-modal';
import TabSection from '@/entities/mypage/ui/tab-section';
=======
=======
import ProfileUpdateModal from '@/features/mypage/ui/profile-update-modal';
>>>>>>> 673bca2 (chore: profile update modal entities -> features로 이동)
import ReviewModal from '@/features/mypage/ui/review-modal';
import SubPageContainer from '@/features/mypage/ui/sub-page';
import TabSection from '@/features/mypage/ui/tab-section';
>>>>>>> aa93372 (chore: fsd 폴더 구조에 맞게 mypage 기능 단위 features로 이동)
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
<<<<<<< HEAD
        <ProfileUpdateModal user={user} />
=======
        <SubPageContainer />
        <ReviewModal />
>>>>>>> aa93372 (chore: fsd 폴더 구조에 맞게 mypage 기능 단위 features로 이동)
      </div>
    </div>
  );
}
