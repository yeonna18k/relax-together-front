import { GatheringsInfoTypes } from '@/entities/gatherings-detail/model/information';
import LikeButton from '@/shared/common/ui/like-button';
import GatheringChip from './GatheringChip';
import GatheringInfo from './GatheringInfo';

interface InformationTopProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function InformationTop({
  gatheringsInfo,
}: InformationTopProps) {
  return (
    <div className="border-b-2 border-dashed border-gray-200 p-6 pb-[19px] lg:pb-[37px]">
      <div className="flex justify-between gap-4">
        <GatheringInfo gatheringsInfo={gatheringsInfo} />
        <div className="h-12 w-12 shrink-0">
          <LikeButton gatheringId={gatheringsInfo.id.toString()} />
        </div>
      </div>
      <GatheringChip gatheringsInfo={gatheringsInfo} />
    </div>
  );
}
