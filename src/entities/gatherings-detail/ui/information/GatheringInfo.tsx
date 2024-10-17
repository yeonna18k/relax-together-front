import { address } from '@/shared/fixture/address';
import { GatheringsInfoTypes } from '../../model/information';

interface GatheringInfoProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function GatheringInfo({ gatheringsInfo }: GatheringInfoProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        {gatheringsInfo.type !== '워케이션'
          ? `달램핏 ${gatheringsInfo.type}`
          : `${gatheringsInfo.type} ${gatheringsInfo.name}`}
      </h2>
      <p className="mt-[2px] text-sm font-medium text-gray-700">
        {gatheringsInfo.location} {address[gatheringsInfo.location]}
      </p>
    </div>
  );
}
