import ChipState from '@/shared/common/ui/chip-state';
import {
  OpenChipStateTypes,
  useParticipantStatus,
} from '@/shared/hooks/useParticipantStatus';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/shared/hooks/useTimeComparison';
import { useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const participantStatus = useParticipantStatus(participantCount);
  const timeStatus = useTimeComparison(startGatheringTime);

  if (
    searchParams.get('filter') === 'my-reviews' ||
    searchParams.get('filter') === 'my-created-gatherings'
  ) {
    return <></>;
  }
  return (
    <div className="flex gap-2">
      {useChipStateMap[timeStatus](participantStatus, timeStatus)}
    </div>
  );
}
