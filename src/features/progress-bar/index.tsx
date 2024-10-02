'use client';

import ArrowRight from '@/shared/assets/icons/arrow-right.svg';
import OpenBadge from '@/shared/common/ui/open-badge';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { Gathering } from '@/shared/model';
import { Progress } from '@/shared/ui/progress';
import { useEffect, useState } from 'react';

export type GatheringCapacityInfo = Pick<
  Gathering,
  'participantCount' | 'capacity' | 'id'
>;

export default function ProgressBar({
  participantCount,
  capacity,
  id,
}: GatheringCapacityInfo) {
  const [progress, setProgress] = useState<number>(0);

  // progress bar 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => setProgress(participantCount), 500);
    return () => clearTimeout(timer);
  }, [participantCount]);

  // const isClosed = value === 20;
  const isClosed = participantCount === capacity;

  const iconColor = isClosed ? 'fill-green-400' : 'fill-gray-700';
  const valueColor = isClosed ? 'text-green-400' : 'text-gray-700';
  const textStyles = isClosed
    ? 'text-green-400 w-full'
    : 'text-green-500 min-w-[65px]';
  const text = isClosed ? 'Closed' : 'join now';

  return (
    <div className="flex w-full items-end gap-6 px-6">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-2">
          <ParticipantCounter
            participantCount={participantCount}
            capacity={capacity}
            iconColor={iconColor}
            valueColor={valueColor}
          />
          {participantCount >= 5 ? (
            <OpenBadge value={participantCount} />
          ) : null}
        </div>
        <Progress value={progress} capacity={capacity} />
      </div>
      <div className="flex items-center gap-2">
        <p className={`${textStyles} font-semibold`}>{text}</p>
        {!isClosed && <ArrowRight className="stroke-green-500 stroke-2" />}
      </div>
    </div>
  );
}
