import CheckIcon from '@/shared/assets/icons/check-icon.svg';
import { ChipStateType } from '@/shared/lib/constants';
import { cn } from '@/shared/lib/utils';
import { ValueOf } from '@/shared/types/utility';

export type ChipStateValueType = ValueOf<typeof ChipStateType>;
interface ChipStateProps {
  state: ChipStateValueType;
}

const ChipStateStyles: Record<ChipStateValueType, string> = {
  scheduled: 'bg-green-50 text-green-500',
  completed: 'bg-gray-200 text-gray-500',
  confirmed: 'border border-green-50 text-green-500',
  pending: 'border border-gray-200 text-gray-500',
};

const ChipStateText: Record<ChipStateValueType, string> = {
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
        {state === ChipStateType.CONFIRMED ? (
          <CheckIcon className="stroke-green-500" />
        ) : (
          <></>
        )}
        {ChipStateText[state]}
      </div>
    </div>
  );
}
