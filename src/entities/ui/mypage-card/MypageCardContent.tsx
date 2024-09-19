'use client';
import GatheringDatetime from '@/entities/ui/mypage-card/GatheringDatetime';
import MypageCardContentBottomButtonContainer from '@/entities/ui/mypage-card/MypageCardContentBottomButtonContainer';
import MypageCardContentTopChipState from '@/entities/ui/mypage-card/MypageCardContentTopChipState';
import CardTitle from '@/shared/common/ui/card-title';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { formatDate, formatTime } from '@/shared/lib/utils';

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
  return (
    <div className="flex h-[156px] w-full flex-col justify-between xs:w-[calc(100%-280px)]">
      {/* chip-status */}
      <MypageCardContentTopChipState
        participantCount={participantCount}
        startGatheringTime={startGatheringTime}
      />
      <div>
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
      </div>
      {/* button */}
      <MypageCardContentBottomButtonContainer
        startGatheringTime={startGatheringTime}
      />
    </div>
  );
}
