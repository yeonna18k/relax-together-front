'use client';
import GatheringDatetime from '@/entities/ui/mypage-card/GatheringDatetime';
import MypageCardContentBottomButtonContainer from '@/entities/ui/mypage-card/MypageCardContentBottomButtonContainer';
import CardTitle from '@/shared/common/ui/card-title';
import ChipState from '@/shared/common/ui/chip-state';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import {
  OpenChipStateTypes,
  useParticipantStatus,
} from '@/shared/hooks/useParticipantStatus';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/shared/hooks/useTimeComparison';
import { formatDate, formatTime } from '@/shared/lib/utils';

const useChipStateMap: Record<
  UseChipStateTypes,
  (
    participantStatus: OpenChipStateTypes,
    timeStatus: UseChipStateTypes,
  ) => React.ReactNode
> = {
  scheduled: (participantStatus, timeStatus) => (
    <>
      <ChipState state={timeStatus} />
      <ChipState state={participantStatus} />
    </>
  ),
  completed: (participantStatus, timeStatus) => (
    <ChipState state={participantStatus} />
  ),
};

interface MypageCardContentProps {
  title: string;
  location: string;
  startGatheringTime: string;
  participantCount: number;
}
export default function MypageCardContent({
  title,
  location,
  startGatheringTime,
  participantCount,
}: MypageCardContentProps) {
  const participantStatus = useParticipantStatus(participantCount);
  const timeStatus = useTimeComparison(startGatheringTime);
  return (
    <div className="flex h-[156px] w-full flex-col xs:w-[calc(100%-280px)]">
      {/* chip-status */}
      <div className="mb-3 flex gap-2">
        {useChipStateMap[timeStatus](participantStatus, timeStatus)}
      </div>
      {/* title */}
      <CardTitle title={title} location={location} />
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
