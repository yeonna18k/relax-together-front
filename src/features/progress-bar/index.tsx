import OpenBadge from '@/shared/common/ui/open-badge';
import ParticipantCounter from '@/shared/common/ui/participant-counter';
import { Progress } from '@/shared/ui/progress';

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const isClosed = value === 20;

  const iconColor = isClosed ? 'fill-[#fb923c]' : 'fill-[#374151]';
  const valueColor = isClosed ? 'text-orange-400' : 'text-gray-900';
  const textColor = isClosed ? 'text-orange-400' : 'text-orange-600';
  const text = isClosed ? 'Closed' : 'join now';

  return (
    <div className="flex w-full items-end gap-6">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-2">
          <ParticipantCounter
            value={value}
            iconColor={iconColor}
            valueColor={valueColor}
          />
          {value >= 5 ? <OpenBadge value={value} /> : null}
        </div>
        <Progress value={value} isClosed={isClosed} />
      </div>
      <span
        className={`flex shrink-0 items-center gap-2 font-semibold ${textColor} ${!isClosed && 'after:block after:h-[18px] after:w-[18px] after:bg-[url("/assets/arrow-right.svg")] after:bg-no-repeat after:content-[""]'}`}
      >
        {text}
      </span>
    </div>
  );
}
