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
    <div className="p-6 pb-[25px] md:pb-[43px]">
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
