'use client';

import OpenBadge from '@/shared/common/ui/open-badge';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { Progress } from '@/shared/ui/progress';
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const [progress, setProgress] = useState<number>(0);

  // progress bar 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, []);

  const isClosed = value === 20;

  const iconColor = isClosed ? 'fill-green-400' : 'fill-gray-700';
  const valueColor = isClosed ? 'text-green-400' : 'text-gray-700';
  const textColor = isClosed ? 'text-green-400' : 'text-green-500';
  const text = isClosed ? 'Closed' : 'join now';

  return (
    <div className="flex w-full items-end gap-6">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-2">
          <ParticipantCounter
            participantCount={value}
            iconColor={iconColor}
            valueColor={valueColor}
          />
          {value >= 5 ? <OpenBadge value={value} /> : null}
        </div>
        <Progress value={progress} />
      </div>
      <span
        className={`flex shrink-0 items-center gap-2 font-semibold ${textColor} ${!isClosed && 'after:block after:h-[18px] after:w-[18px] after:bg-[url("/assets/arrow-right.svg")] after:bg-no-repeat after:content-[""]'}`}
      >
        {text}
      </span>
    </div>
  );
}
