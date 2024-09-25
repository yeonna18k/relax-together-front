import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';

import {
  OpenChipStateTypes,
  participantComparisonStatus,
  timeComparisonStatus,
  UseChipStateTypes,
} from '@/entities/mypage/model/lib/utils';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import ChipState from '@/shared/common/ui/chip-state';

const useChipStateMap: Record<
  UseChipStateTypes,
  (
    participantStatus: OpenChipStateTypes,
    timeStatus: UseChipStateTypes,
  ) => React.ReactNode
> = {
  scheduled: (participantStatus, timeStatus) => (
    <>
      <ChipState state={timeStatus} />
      <ChipState state={participantStatus} />
    </>
  ),
  completed: (participantStatus, timeStatus) => (
    <ChipState state={timeStatus} />
  ),
};

export default function MypageCardContentTopChipState({
  participantCount,
  dateTime,
}: Pick<MyGathering, 'participantCount' | 'dateTime'>) {
  const { currentSubPage } = useCommonSearchParams();
  const participantStatus = participantComparisonStatus(participantCount);
  const timeStatus = timeComparisonStatus(dateTime);

  if (currentSubPage !== 'my-gatherings') {
    return <></>;
  }
  return (
    <div className="flex gap-2">
      {useChipStateMap[timeStatus](participantStatus, timeStatus)}
    </div>
  );
}
