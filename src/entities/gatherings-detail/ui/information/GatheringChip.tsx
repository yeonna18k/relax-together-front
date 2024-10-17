import ChipInfo from '@/shared/common/ui/chip-info';
import { ChipInfoType } from '@/shared/lib/constants';
import { formatDate, formatTime } from '@/shared/lib/utils';
import { GatheringsInfoTypes } from '../../model/information';

interface GatheringChipProps {
  gatheringsInfo: GatheringsInfoTypes;
}

export default function GatheringChip({ gatheringsInfo }: GatheringChipProps) {
  // 날짜, 시간 포맷팅
  const formattedDate = formatDate(gatheringsInfo.dateTime);
  const formattedTime = formatTime(gatheringsInfo.dateTime);

  return (
    <div className="mt-3 space-x-2">
      <ChipInfo type={ChipInfoType.DATE}>{formattedDate}</ChipInfo>
      <ChipInfo type={ChipInfoType.TIME}>{formattedTime}</ChipInfo>
    </div>
  );
}
