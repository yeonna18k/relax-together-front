'use client';
import { ChipStateTypes } from '@/shared/common/ui/chip-state';
import { useEffect, useState } from 'react';

export type UseChipStateTypes = Extract<
  ChipStateTypes,
  'scheduled' | 'completed'
>;
export function useTimeComparison(
  startGatheringTime: string,
): UseChipStateTypes {
  const [isUpcoming, setIsUpcoming] = useState<boolean>(true);

  useEffect(() => {
    const now = new Date();
    const start = new Date(startGatheringTime);

    setIsUpcoming(start > now);
  }, [startGatheringTime]);

  return isUpcoming ? 'scheduled' : 'completed';
}
