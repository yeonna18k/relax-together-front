import { GatheringsInfoTypes } from '@/entities/model/information';
import ChipInfo from '@/shared/common/ui/chip-info';
import { formatDate, formatTime } from '@/shared/lib/utils';

interface GatheringChipProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function GatheringChip({ gatheringsInfo }: GatheringChipProps) {
  // 날짜, 시간 포맷팅
  const formattedDate = formatDate(gatheringsInfo.dateTime);
  const formattedTime = formatTime(gatheringsInfo.dateTime);

  return (
    <div className="mt-3 space-x-2">
      <ChipInfo type="date">{formattedDate}</ChipInfo>
      <ChipInfo type="time">{formattedTime}</ChipInfo>
    </div>
  );
}
