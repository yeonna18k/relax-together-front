'use client';
import GatheringDatetime from '@/entities/mypage/ui/card/GatheringDatetime';
import MypageCardContentBottomButtonContainer from '@/entities/mypage/ui/card/MypageCardContentBottomButtonContainer';
import MypageCardContentTopChipState from '@/entities/mypage/ui/card/MypageCardContentTopChipState';
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
    <div className="flex h-[156px] w-full flex-col justify-between px-0 xs:w-[calc(100%-280px)] md:px-4 lg:flex-row lg:items-center lg:px-5">
      <div>
        {/* chip-status */}
        <MypageCardContentTopChipState
          participantCount={participantCount}
          startGatheringTime={startGatheringTime}
        />
        {/* title */}
        <CardTitle title={title} location={location} />
        {/* date */}
        <div className="flex gap-3">
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
