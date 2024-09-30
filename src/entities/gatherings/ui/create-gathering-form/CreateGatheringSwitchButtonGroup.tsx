import { Button } from '@/shared/ui/button';

export type SwitchFiler = '달램핏' | '워케이션';

const switchButtons = [
  { label: '달램핏', value: '달램핏' },
  { label: '워케이션', value: '워케이션' },
];
interface CreateGatheringSwitchButtonGroupProps {
  selectedFilter: string;
  setSelectedFilter: (filter: SwitchFiler) => void;
}
export default function CreateGatheringSwitchButtonGroup({
  selectedFilter,
  setSelectedFilter,
}: CreateGatheringSwitchButtonGroupProps) {
  return (
    <div className="flex w-full gap-3">
      {switchButtons.map(button => (
        <Button
          key={button.label}
          className={`${selectedFilter === button.value ? 'bg-gray-900 text-white hover:bg-gray-900' : ''}`}
          onClick={e => setSelectedFilter(e.currentTarget.value as SwitchFiler)}
          size="full"
          value={button.value}
          variant="filter"
          type="button"
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}
