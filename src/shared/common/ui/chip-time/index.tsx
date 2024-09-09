import { cn } from '@/shared/lib/utils';

type ChipTimeState = 'selected' | 'disabled' | 'enabled';

interface ChipTimeProps {
  state: ChipTimeState;
  hour: number;
  minute: number;
}

const ChipTimeStyles: Record<ChipTimeState, string> = {
  enabled: 'border border-gray-200 bg-gray-50 text-gray-900',
  selected: 'bg-gray-900 text-white',
  disabled: 'cursor-default bg-gray-200 text-gray-400',
};

export default function ChipTime({ state, hour, minute }: ChipTimeProps) {
  return (
    <button
      data-testid="chip-time"
      className={cn(
        'h-8 w-[60px] rounded-lg text-center text-sm font-medium',
        ChipTimeStyles[state],
      )}
    >
      {String(hour).padStart(2, '0')}:{String(minute).padEnd(2, '0')}
    </button>
  );
}
