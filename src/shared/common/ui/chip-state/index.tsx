import CheckIcon from '@/shared/assets/icons/check-icon.svg';
import { cn } from '@/shared/lib/utils';

export type ChipStateTypes =
  | 'scheduled'
  | 'completed'
  | 'confirmed'
  | 'pending';

interface ChipStateProps {
  state: ChipStateTypes;
}

const ChipStateStyles: Record<ChipStateTypes, string> = {
  scheduled: 'bg-orange-100 text-orange-600',
  completed: 'bg-gray-200 text-gray-500',
  confirmed: 'border border-orange-100 text-orange-500',
  pending: 'border border-gray-200 text-gray-500',
};

const ChipStateText: Record<ChipStateTypes, string> = {
  scheduled: '이용 예정',
  completed: '이용 완료',
  confirmed: '개설확정',
  pending: '개설대기',
};

export default function ChipState({ state }: ChipStateProps) {
  return (
    <div
      data-testid="chip-state"
      className={cn(
        'inline-flex h-8 items-center rounded-3xl bg-white px-3 py-[6px] text-sm font-medium',
        ChipStateStyles[state],
      )}
    >
      <div className="flex items-center gap-1">
        {state === 'confirmed' ? (
          <CheckIcon className="stroke-orange-600" />
        ) : (
          <></>
        )}
        {ChipStateText[state]}
      </div>
    </div>
  );
}
