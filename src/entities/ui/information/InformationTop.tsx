import ChipInfo from '@/shared/common/ui/chip-info';
import { formatDate, formatTime } from '@/shared/lib/utils';
import { GatheringsInfoTypes } from '.';

interface InformationTopProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function InformationTop({
  gatheringsInfo,
}: InformationTopProps) {
  // 날짜, 시간 포맷팅
  const formattedDate = formatDate(gatheringsInfo.dateTime);
  const formattedTime = formatTime(gatheringsInfo.dateTime);

  return (
    <div className="p-6 pb-[43px]">
      <div className="flex justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {gatheringsInfo.name}
          </h2>
          <p className="mt-[2px] text-sm font-medium text-gray-700">
            {gatheringsInfo.location}
          </p>
        </div>
        <div className="h-12 w-12 shrink-0 bg-sky-500">찜</div>
      </div>
      <div className="mt-3 space-x-2">
        <ChipInfo type="date">{formattedDate}</ChipInfo>
        <ChipInfo type="time">{formattedTime}</ChipInfo>
      </div>
    </div>
  );
}
