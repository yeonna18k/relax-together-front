'use client';
import { ChipStateTypes } from '@/shared/common/ui/chip-state';
import { MIN_PARTICIPANT } from '@/shared/lib/constants';
import { useEffect, useState } from 'react';

export function useParticipantStatus(participantCount: number) {
  const [status, setStatus] = useState<ChipStateTypes>('pending');

  useEffect(() => {
    participantCount >= MIN_PARTICIPANT
      ? setStatus('confirmed')
      : setStatus('pending');
  }, [participantCount]);

  return status;
}
