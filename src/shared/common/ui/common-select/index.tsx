import ArrowDropdown from '@/shared/assets/icons/arrow-dropdown.svg';
import SortArrow from '@/shared/assets/icons/sort-arrow.svg';
import { cn } from '@/shared/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { cva, VariantProps } from 'class-variance-authority';
type FilterIconType = 'default' | 'sort';

const triggerVariants = cva('w-full rounded-md', {
  variants: {
    variant: {
      default: 'w-[120px]',
      modal: 'text-base border-none',
      sort: 'bg-white text-gray-900 flex-row-reverse [&>span]:hidden [&>span]:lg:block lg:p-2 justify-end gap-1 w-10 lg:w-[120px] p-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const getTriggerStyles = ({ selectedValue }: { selectedValue?: string }) => {
  return selectedValue === 'ALL' || selectedValue === undefined
    ? 'bg-white text-gray-900'
    : 'bg-gray-900 text-white';
};

export type CommonSelectItem = {
  value: string;
  label: string;
};
interface SelectProps {
  variant?: VariantProps<typeof triggerVariants>['variant'];
  filterIconType: FilterIconType;
  placeholder: string;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  menuItems: Array<CommonSelectItem>;
  size?: 'sm' | 'lg';
}

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
  variant,
  filterIconType,
  placeholder,
  onValueChange,
  selectedValue,
  menuItems,
  size = 'sm',
}: SelectProps) {
  const getIconFillColor =
    selectedValue === 'ALL' || selectedValue === undefined
      ? 'fill-[#1F2937]'
      : 'fill-[#FFFFFF]';

  const filterIconMap: Record<FilterIconType, React.ReactNode> = {
    default: (
      <ArrowDropdown
        className={`h-6 w-6 transform transition-all group-data-[state=open]:rotate-180 ${getIconFillColor}`}
      />
    ),
    sort: <SortArrow className="h-6 w-6" />,
  };
  return (
    <Select onValueChange={onValueChange} value={selectedValue}>
      <SelectTrigger
        data-testid="select-trigger"
        className={cn(
          `${size === 'sm' ? 'w-[120px]' : 'w-full'} h-10`,
          `${getTriggerStyles({ selectedValue })}`,
          triggerVariants({ variant }),
        )}
      >
        {filterIconMap[filterIconType]} {/* 아이콘을 자식으로 추가 */}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent data-testid="select-content">
        {menuItems?.map(menuItem => (
          <SelectItem key={menuItem.value} value={menuItem.value}>
            {menuItem.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
