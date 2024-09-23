import ChipState from '@/shared/common/ui/chip-state';
import useCommonSearchParams from '@/shared/hooks/useCommonSearchParams';
import {
  OpenChipStateTypes,
  useParticipantStatus,
} from '@/shared/hooks/useParticipantStatus';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/shared/hooks/useTimeComparison';

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

interface MypageCardContentTopChipStateProps {
  participantCount: number;
  startGatheringTime: string;
}
export default function MypageCardContentTopChipState({
  participantCount,
  startGatheringTime,
}: MypageCardContentTopChipStateProps) {
  const { currentSubPage } = useCommonSearchParams();
  const participantStatus = useParticipantStatus(participantCount);
  const timeStatus = useTimeComparison(startGatheringTime);

  if (currentSubPage !== 'my-gatherings') {
    return <></>;
  }
  return (
    <div className="flex gap-2">
      {useChipStateMap[timeStatus](participantStatus, timeStatus)}
    </div>
  );
}
