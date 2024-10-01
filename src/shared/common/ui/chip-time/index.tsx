import { Button, ButtonProps } from '@/shared/ui/button';

export type ChipTimeState = 'disabled' | 'enabled';

export interface ChipTimeProps extends ButtonProps {
  state: ChipTimeState;
  hour: number;
  minute: number;
  isSelected: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ChipTimeStyles: Record<ChipTimeState, string> = {
  enabled: 'border border-gray-200 bg-gray-50 text-gray-900',
  disabled:
    'disabled:cursor-default disabled:bg-gray-200 disabled:text-gray-400',
};

export default function ChipTime({
  state,
  hour,
  minute,
  isSelected,
  onClick,
  ...props
}: ChipTimeProps) {
  return (
    <Button
      type="button"
      data-testid="chip-time"
      className={`h-8 w-[60px] rounded-lg text-center text-sm font-medium hover:bg-gray-900 hover:text-white active:bg-gray-900 ${ChipTimeStyles[state]} ${isSelected ? 'bg-gray-900 text-white' : ''}`}
      value={hour}
      onClick={onClick}
      {...props}
    >
      {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}
    </Button>
  );
}
