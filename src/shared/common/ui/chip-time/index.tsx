import { cn } from '@/shared/lib/utils';

interface ChipTimeProps {
  state: 'selected' | 'disabled' | 'enabled';
  hour: number;
  minute: number;
}

export default function ChipTime({ state, hour, minute }: ChipTimeProps) {
  return (
    <button
      className={cn('h-8 w-[60px] rounded-lg text-center text-sm font-medium', {
        'border border-gray-200 bg-gray-50 text-gray-900': state === 'enabled',
        'bg-gray-900 text-white': state === 'selected',
        'cursor-default bg-gray-200 text-gray-400': state === 'disabled',
      })}
    >
      {String(hour).padStart(2, '0')}:{String(minute).padEnd(2, '0')}
    </button>
  );
}
