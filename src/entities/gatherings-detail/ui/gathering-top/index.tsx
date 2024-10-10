import TagClock from '@/shared/common/ui/tag-clock';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import Image from 'next/image';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';
import Information from '../information';

interface GatheringTopProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes;
}

export default function GatheringTop({
  gatheringsInfo,
  participantList,
}: GatheringTopProps) {
  return (
    <div className="gap-6 sm:flex">
      <div className="relative h-[180px] overflow-hidden rounded-xl border-2 border-gray-200 sm:h-[240px] sm:w-1/2 md:h-[270px]">
        <Image
          src={gatheringsInfo.imageUrl}
          alt="이미지"
          width={486}
          height={270}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-0 top-0">
          <TagClock
            message={getTimeUntilDeadline(
              new Date(gatheringsInfo.registrationEnd),
            )}
            variant="rounded"
          />
        </div>
      </div>
      <div className="relative mt-4 sm:mt-0 sm:w-1/2">
        <Information
          gatheringsInfo={gatheringsInfo}
          participantList={participantList}
        />
      </div>
    </div>
  );
}
