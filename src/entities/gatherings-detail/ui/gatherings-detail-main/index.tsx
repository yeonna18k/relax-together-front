'use client';

import BottomFloatingBar from '@/features/bottom-floating-bar';
import { dummyGatheringsInfo } from '@/shared/fixture/information';
import GatheringTop from '../gathering-top';
import ReviewContainer from '../review-container';

interface GatheringsDetailMainProps {
  id: string;
}

export default function GatheringsDetailMain({
  id,
}: GatheringsDetailMainProps) {
  // createdBy: 생성자
  // const isHost = gatheringsInfo.createdBy === userInfo.id;
  const isHost = false;

  const gatheringsInfo = dummyGatheringsInfo;

  return (
    <>
      <div
        className={`mx-auto max-w-[996px] px-4 pt-6 sm:px-6 sm:pb-[84px] sm:pt-[27.5px] lg:px-0 lg:pt-[29.5px] ${isHost ? 'pb-[134px]' : 'pb-[96px]'}`}
      >
        <GatheringTop id={id} gatheringsInfo={gatheringsInfo} />
        <ReviewContainer id={id} />
      </div>
      <BottomFloatingBar isHost={isHost} />
    </>
  );
}
