'use client';

import BottomFloatingBar from '@/features/bottom-floating-bar/ui';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import { useQuery } from '@tanstack/react-query';
import { gatheringsDetailApiService } from '../../api/service/GatheringsDetailApiService';
import GatheringTop from '../gathering-top';
import ReviewContainer from '../review-container';

interface GatheringsDetailMainProps {
  id: string;
}

export default function GatheringsDetailMain({
  id,
}: GatheringsDetailMainProps) {
  const user = useUserDataStore(state => state.user);

  const { data: gatheringsInfo } = useQuery({
    queryKey: ['gathering', id],
    queryFn: () => gatheringsDetailApiService.getGatheringsInfo(id),
    staleTime: Infinity,
  });

  const { data: participantList } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['participants', id],
    queryFn: () =>
      gatheringsDetailApiService.getParticipantList({
        id,
        page: 0,
        size: gatheringsInfo?.participantCount,
      }),
    enabled: !!gatheringsInfo,
  });

  // 유저가 해당 모임의 주최자인지 여부
  const isHost = gatheringsInfo?.hostUser === user?.id;

  return (
    <>
      <div
        className={`mx-auto max-w-[996px] px-4 pt-6 sm:px-6 sm:pb-[84px] sm:pt-[28px] md:pb-[106px] lg:px-0 lg:pt-[30px] ${isHost ? 'pb-[154px]' : 'pb-[110px]'}`}
      >
        {gatheringsInfo && participantList && (
          <GatheringTop
            gatheringsInfo={gatheringsInfo}
            participantList={participantList}
          />
        )}
        <ReviewContainer id={id} />
      </div>
      {gatheringsInfo && participantList && (
        <BottomFloatingBar
          id={id}
          isHost={isHost}
          gatheringsInfo={gatheringsInfo}
          participantList={participantList}
        />
      )}
    </>
  );
}
