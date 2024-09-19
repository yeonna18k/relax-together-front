import { GatheringsInfoTypes } from '@/entities/model/information';
import GatheringChip from './GatheringChip';
import GatheringInfo from './GatheringInfo';

interface InformationTopProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function InformationTop({
  gatheringsInfo,
}: InformationTopProps) {
  return (
    <div className="p-6 pb-[43px]">
      <div className="flex justify-between gap-4">
        <GatheringInfo gatheringsInfo={gatheringsInfo} />
        <div className="h-12 w-12 shrink-0 bg-sky-500">찜 컴포넌트</div>
      </div>
      <GatheringChip gatheringsInfo={gatheringsInfo} />
    </div>
  );
}
