'use client';

import { useUserData } from '@/entities/mypage/model/hooks/useUserData';
import PageTitle from '@/entities/mypage/ui/main/PageTitle';
import Profile from '@/entities/mypage/ui/profile';
import ProfileUpdateModal from '@/features/mypage/ui/profile-update-modal';
import ReviewModal from '@/features/mypage/ui/review-modal';
import SubPageContainer from '@/features/mypage/ui/sub-page';
import TabSection from '@/features/mypage/ui/tab-section';
import { useModal } from '@/shared/hooks/useModal';
import { Suspense } from 'react';

export default function Mypage() {
  const { user } = useUserData();
  const { modal } = useModal();
  return (
    <div className="flex h-[calc(100vh-60px)] w-full justify-center lg:h-[calc(100vh-75px)]">
      <div className="w-full px-4 pt-6 md:px-6 md:pt-[22px] xl:max-w-[1200px] xl:px-[102px]">
        <PageTitle title="마이 페이지" />
        <Profile user={user} />
        <Suspense fallback={null}>
          <TabSection />
        </Suspense>
        <SubPageContainer />
        {modal.includes('writeReview') && <ReviewModal />}
        {modal.includes('profileUpdate') && <ProfileUpdateModal user={user} />}
      </div>
    </div>
  );
}
