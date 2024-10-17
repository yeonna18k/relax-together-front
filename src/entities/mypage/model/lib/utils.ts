import { ChipStateValueType } from '@/shared/common/ui/chip-state';
import { MIN_PARTICIPANT } from '@/shared/lib/constants';

export type UseChipStateTypes = Extract<
  ChipStateValueType,
  'scheduled' | 'completed'
>;
export function timeComparisonStatus(
  startGatheringTime: string,
): UseChipStateTypes {
  const now = new Date();
  const start = new Date(startGatheringTime);

  return start > now ? 'scheduled' : 'completed';
}

export type OpenChipStateTypes = Extract<
  ChipStateValueType,
  'confirmed' | 'pending'
>;
export function participantComparisonStatus(
  participantCount: number,
): OpenChipStateTypes {
  return participantCount >= MIN_PARTICIPANT ? 'confirmed' : 'pending';
}
