import { ChipInfoType } from '@/shared/lib/constants';
import { cn } from '@/shared/lib/utils';
import { ValueOf } from '@/shared/types/utility';
import { ReactNode } from 'react';

export type ChipInfoTypeValueType = ValueOf<typeof ChipInfoType>;

interface ChipInfoProps {
  type: ChipInfoTypeValueType;
  children: ReactNode;
}
const ChipInfoMatch: Record<ChipInfoTypeValueType, string> = {
  date: 'text-white',
  time: 'text-green-600',
};

export default function ChipInfo({ type, children }: ChipInfoProps) {
  return (
    <div
      data-testid="chip-info"
      className={cn(
        `inline-block h-6 w-fit whitespace-nowrap rounded bg-gray-900 px-2 py-[2px] text-sm font-medium ${ChipInfoMatch[type]}`,
      )}
    >
      <span>{children}</span>
    </div>
  );
}
