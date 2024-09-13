'use client';
import GatheringDatetime from '@/entities/ui/mypage-card/GatheringDatetime';
import MypageCardContentBottomButtonContainer from '@/entities/ui/mypage-card/MypageCardContentBottomButtonContainer';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { useParticipantStatus } from '@/shared/hooks/useParticipantStatus';
import { useTimeComparison } from '@/shared/hooks/useTimeComparison';
import { formatDate, formatTime } from '@/shared/lib/utils';

interface MypageCardContentProps {
  startGatheringTime: string;
  participantCount: number;
}
export default function MypageCardContent({
  startGatheringTime,
  participantCount,
}: MypageCardContentProps) {
  const participantStatus = useParticipantStatus(participantCount);
  const timeStatus = useTimeComparison(startGatheringTime);
  return (
    <div className="flex h-[156px] w-full flex-col xs:w-[calc(100%-280px)]">
      {/* chip-status */}
      <div className="mb-3">chip</div>
      {/* title */}
      <div>타이틀</div>
      {/* date */}
      <div className="mt-1.5 flex gap-3">
        <GatheringDatetime
          date={formatDate(startGatheringTime)}
          time={formatTime(startGatheringTime)}
        />
        <ParticipantCounter
          participantCount={participantCount}
          iconColor={'fill-gray-700'}
          valueColor={'text-gray-700'}
        />
      </div>
      {/* button */}
      <div className="mt-[18px]">
        <MypageCardContentBottomButtonContainer
          startGatheringTime={startGatheringTime}
        />
      </div>
    </div>
  );
}
