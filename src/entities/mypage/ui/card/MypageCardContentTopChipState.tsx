import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import {
  OpenChipStateTypes,
  useParticipantStatus,
} from '@/entities/mypage/model/hooks/useParticipantStatus';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/entities/mypage/model/hooks/useTimeComparison';
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
  const participantStatus = useParticipantStatus(participantCount);
  const timeStatus = useTimeComparison(dateTime);

  if (currentSubPage !== 'my-gatherings') {
    return <></>;
  }
  return (
    <div className="flex gap-2">
      {useChipStateMap[timeStatus](participantStatus, timeStatus)}
    </div>
  );
}
