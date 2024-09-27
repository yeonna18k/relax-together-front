'use client';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import GatheringDatetime from '@/entities/mypage/ui/card/GatheringDatetime';
import MypageCardContentBottomButtonContainer from '@/entities/mypage/ui/card/MypageCardContentBottomButtonContainer';
import MypageCardContentTopChipState from '@/entities/mypage/ui/card/MypageCardContentTopChipState';
import CardTitle from '@/shared/common/ui/card-title';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { formatDate, formatTime } from '@/shared/lib/utils';

export default function MypageCardContent(
  props: Omit<MyGathering, 'imageUrl'>,
) {
  const { type, location, dateTime, participantCount, id, reviewed, capacity } =
    props;
  return (
    <div className="flex h-[156px] w-full flex-col justify-between px-0 xs:w-[calc(100%-280px)] md:px-4 lg:flex-row lg:items-center lg:px-5">
      <div>
        {/* chip-status */}
        <MypageCardContentTopChipState
          participantCount={participantCount}
          dateTime={dateTime}
        />
        {/* title */}
        <CardTitle type={type} location={location} />
        {/* date */}
        <div className="flex gap-3">
          <GatheringDatetime
            date={formatDate(dateTime)}
            time={formatTime(dateTime)}
          />
          <ParticipantCounter
            participantCount={participantCount}
            capacity={capacity}
            iconColor={'fill-gray-700'}
            valueColor={'text-gray-700'}
          />
        </div>
      </div>
      {/* button */}
      <MypageCardContentBottomButtonContainer
        id={id}
        dateTime={dateTime}
        reviewed={reviewed}
      />
    </div>
  );
}
