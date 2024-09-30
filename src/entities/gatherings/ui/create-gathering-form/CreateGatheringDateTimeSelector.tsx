import { ChipTimeCommonProps } from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringDatePickerFormFiled';
import ChipTime from '@/shared/common/ui/chip-time';

interface CreateGatheringDateTimeSelectorProps {
  title: string;
  timeItems: Array<ChipTimeCommonProps>;
  selectedValue: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CreateGatheringDateTimeSelector({
  title,
  timeItems,
  selectedValue,
  onClick,
}: CreateGatheringDateTimeSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <div className="flex w-full flex-wrap gap-2">
        {timeItems.map(time => (
          <ChipTime
            key={time.hour}
            hour={time.hour}
            minute={time.minute}
            state={time.state}
            disabled={time.state === 'disabled'}
            isSelected={time.hour === parseInt(selectedValue, 10)}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}
