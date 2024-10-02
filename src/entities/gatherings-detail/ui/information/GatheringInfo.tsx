import { GatheringsInfoTypes } from '../../model/information';

interface GatheringInfoProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function GatheringInfo({ gatheringsInfo }: GatheringInfoProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        {gatheringsInfo.type}
      </h2>
      <p className="mt-[2px] text-sm font-medium text-gray-700">
        {gatheringsInfo.location}
      </p>
    </div>
  );
}
