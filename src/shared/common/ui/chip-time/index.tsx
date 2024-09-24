type ChipTimeState = 'selected' | 'disabled' | 'enabled';

export interface ChipTimeProps {
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
      className={`h-8 w-[60px] rounded-lg text-center text-sm font-medium ${ChipTimeStyles[state]}`}
    >
      {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}
    </button>
  );
}
