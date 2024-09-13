'use client';
import { ChipStateTypes } from '@/shared/common/ui/chip-state';
import { MIN_PARTICIPANT } from '@/shared/lib/constants';
import { useEffect, useState } from 'react';

export type OpenChipStateTypes = Extract<
  ChipStateTypes,
  'confirmed' | 'pending'
>;
export function useParticipantStatus(
  participantCount: number,
): OpenChipStateTypes {
  const [status, setStatus] = useState<OpenChipStateTypes>('pending');

  useEffect(() => {
    participantCount >= MIN_PARTICIPANT
      ? setStatus('confirmed')
      : setStatus('pending');
  }, [participantCount]);

  return status;
}
