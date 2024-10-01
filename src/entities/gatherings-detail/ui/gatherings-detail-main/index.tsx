'use client';

import BottomFloatingBar from '@/features/bottom-floating-bar/ui';
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
  const { data: gatheringsInfo } = useQuery({
    queryKey: ['gathering', id],
    queryFn: () => gatheringsDetailApiService.getGatheringsInfo(id),
    staleTime: Infinity,
  });

  const { data: participantList } = useQuery({
    queryKey: ['participants', id],
    queryFn: () => gatheringsDetailApiService.getParticipantList(id),
  });

  // const isHost = gatheringsInfo.hostUser === userInfo.id;
  const isHost = false;

  return (
    <>
      <div
        className={`mx-auto max-w-[996px] px-4 pt-6 sm:px-6 sm:pb-[84px] sm:pt-[27.5px] lg:px-0 lg:pt-[29.5px] ${isHost ? 'pb-[134px]' : 'pb-[96px]'}`}
      >
        {gatheringsInfo && participantList && (
          <GatheringTop
            gatheringsInfo={gatheringsInfo}
            participantList={participantList}
          />
        )}
        <ReviewContainer id={id} />
      </div>
      {participantList && (
        <BottomFloatingBar
          id={id}
          isHost={isHost}
          participantList={participantList}
        />
      )}
    </>
  );
}
