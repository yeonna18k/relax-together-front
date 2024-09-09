import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

type ChipStateTypes = 'scheduled' | 'completed' | 'confirmed' | 'pending';

interface ChipStateProps {
  state: ChipStateTypes;
  children: ReactNode;
}

const ChipStateStyles: Record<ChipStateTypes, string> = {
  scheduled: 'bg-orange-100 text-orange-600',
  completed: 'bg-gray-200 text-gray-500',
  confirmed: 'border border-orange-100 text-orange-500',
  pending: 'border border-gray-200 text-gray-500',
};

export default function ChipState({ state, children }: ChipStateProps) {
  return (
    <div
      className={cn(
        'inline-block h-8 rounded-3xl bg-white px-3 py-[6px] text-sm font-medium',
        ChipStateStyles[state],
      )}
    >
      <div className="flex gap-1">
        {state === 'confirmed' ? (
          <Image
            src="/assets/check.svg"
            alt="Check icon"
            width={16}
            height={16}
          />
        ) : (
          ''
        )}
        {children}
      </div>
    </div>
  );
}
