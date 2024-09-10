import { Select, SelectTrigger, SelectValue } from '@/shared/ui/select';

interface SelectProps {
  placeholder: string;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  children?: React.ReactNode;
}

/**
 * @description 공용 CommonSelect 컴포넌트
 * @author Charles
 * @param {SelectProps} {
 *   placeholder,
 *   onValueChange,
 *   children,
 * }
 */
export default function CommonSelect({
  placeholder,
  onValueChange,
  selectedValue,
  children,
}: SelectProps) {
  const getTriggerColor =
    selectedValue !== 'ALL'
      ? 'bg-gray-900 text-white'
      : 'bg-white text-gray-900';
  const getIconColor = selectedValue !== 'ALL' ? '#FFFFFF' : '#1F2937';
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger
        className={`max-w-[28.75rem] lg:w-full ${getTriggerColor}`}
        iconClassName={getIconColor}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {children}
    </Select>
  );
}
