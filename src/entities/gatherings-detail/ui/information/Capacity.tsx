import { MIN_PARTICIPANT } from '@/shared/lib/constants';
import { GatheringsInfoTypes } from '../../model/information';

interface CapacityProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function Capacity({ gatheringsInfo }: CapacityProps) {
  // 텍스트 색상
  const textColor =
    gatheringsInfo.participantCount === 20
      ? 'text-orange-400'
      : 'text-gray-700';

  return (
    <div className="mt-2 flex justify-between">
      <div className="text-xs font-medium text-gray-700">
        <span>최소인원</span>
        <span data-testid="capacity" className="ml-[6px]">
          {MIN_PARTICIPANT}명
        </span>
      </div>
      <div
        data-testid="maxCapacity"
        className={`text-xs font-medium text-gray-700 ${textColor}`}
      >
        <span>최대인원</span>
        <span className="ml-[6px]">{gatheringsInfo.capacity}명</span>
      </div>
    </div>
  );
}
