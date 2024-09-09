import { cn } from '@/shared/lib/utils';
import { ReactNode } from 'react';

interface ChipInfoProps {
  type: 'date' | 'time';
  children: ReactNode;
}

export default function ChipInfo({ type, children }: ChipInfoProps) {
  return (
    <div
      className={cn('bg-gray-900 px-2 py-[2px]', {
        '': type === 'date',
        '': type === 'time',
      })}
    >
      {children}
    </div>
  );
}
