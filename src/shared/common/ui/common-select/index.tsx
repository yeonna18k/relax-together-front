import ArrowDropdown from '@/shared/assets/icons/arrow-dropdown';
import SortArrow from '@/shared/assets/icons/sort-arrow';
import { cn } from '@/shared/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
type FilterIconType = 'default' | 'sort';

export type CommonSelectItem = {
  value: string;
  label: string;
};

interface SelectProps {
  filterIconType: FilterIconType;
  placeholder: string;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  menuItems: Array<CommonSelectItem>;
}

const getTriggerStyles = ({
  selectedValue,
  filterIconType,
}: {
  selectedValue?: string;
  filterIconType: FilterIconType;
}) => {
  if (filterIconType === 'sort') {
    return 'bg-white text-gray-900 flex-row-reverse [&>span]:hidden [&>span]:md:block w-9 p-[6px] md:w-[120px]';
  }
  return selectedValue === 'ALL' || selectedValue === undefined
    ? 'bg-white text-gray-900'
    : 'bg-gray-900 text-white';
};

/**
 * @description 공용 셀렉트 컴포넌트
 * @author Charles
 * @param {SelectProps} {
 *   filterIconType,
 *   placeholder,
 *   onValueChange,
 *   selectedValue,
 *   children,
 * }
 */
export default function CommonSelect({
  filterIconType,
  placeholder,
  onValueChange,
  selectedValue,
  menuItems,
}: SelectProps) {
  const getIconFillColor =
    selectedValue === 'ALL' || selectedValue === undefined
      ? '#1F2937'
      : '#FFFFFF';

  const filterIconMap: Record<FilterIconType, React.ReactNode> = {
    default: <ArrowDropdown fill={getIconFillColor} />,
    sort: <SortArrow />,
  };
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger
        data-testid="select-trigger"
        className={cn(
          'w-[120px]',
          `${getTriggerStyles({ selectedValue, filterIconType })}`,
        )}
        icon={filterIconMap[filterIconType]}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent data-testid="select-content">
        {menuItems.map(menuItem => (
          <SelectItem key={menuItem.value} value={menuItem.value}>
            {menuItem.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
