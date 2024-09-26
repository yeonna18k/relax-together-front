import ArrowDropdown from '@/shared/assets/icons/arrow-dropdown.svg';
import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/ui/input';
import { useEffect, useState } from 'react';

type InputIconType = 'default' | 'dropdown';

interface CommonInputProps {
  placeholder?: string;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  iconType?: InputIconType;
  type?: 'text';
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  value?: string;
  className?: string;
}

const getInputStyles = ({
  selectedValue,
  iconType,
}: {
  selectedValue?: string;
  iconType: InputIconType;
}) => {
  if (iconType === 'dropdown') {
    return 'bg-white text-gray-900 flex-row-reverse px-2 py-2 justify-end gap-1';
  }
  return selectedValue === 'ALL' || selectedValue === undefined
    ? 'bg-white text-gray-900'
    : 'bg-gray-900 text-white';
};

const getSizeStyles = (size: 'xsmall' | 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'xsmall':
      return 'h-[32px] text-xs w-[311px]';
    case 'small':
      return 'h-[40px] text-sm w-[343px]';
    case 'medium':
      return 'h-[44px] text-base w-[360px]';
    case 'large':
      return 'h-[48px] text-lg w-[472px]';
    default:
      return 'h-8 text-base w-[343px]';
  }
};

const getDropdownSizeStyles = (
  size: 'xsmall' | 'small' | 'medium' | 'large',
) => {
  switch (size) {
    case 'xsmall':
      return 'w-[311px]';
    case 'small':
      return 'w-[343px]';
    case 'medium':
      return 'w-[360px]';
    case 'large':
      return 'w-[472px]';
    default:
      return 'w-[343px]';
  }
};

export default function CommonInput({
  placeholder,
  onValueChange,
  selectedValue,
  value = '',
  iconType = 'default',
  size = 'medium',
  className = '',
}: CommonInputProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item: string) => {
    setInputValue(item);
    setIsDropdownOpen(false);
    if (onValueChange) {
      onValueChange(item);
    }
  };

  const getIconFillColor =
    selectedValue === 'ALL' || selectedValue === undefined
      ? 'fill-[#1F2937]'
      : 'fill-[#FFFFFF]';

  const iconMap: Record<InputIconType, React.ReactNode> = {
    default: null,
    dropdown: (
      <ArrowDropdown
        onClick={handleDropdownClick}
        className={`h-6 w-6 transform cursor-pointer transition-all ${
          isDropdownOpen ? 'rotate-180' : ''
        } ${getIconFillColor}`}
      />
    ),
  };

  return (
    <div className="relative flex items-center">
      <Input
        placeholder={placeholder || '입력해주세요'}
        value={inputValue}
        className={cn(
          'pr-10',
          getInputStyles({ selectedValue, iconType }),
          getSizeStyles(size),
        )}
        onChange={e => {
          setInputValue(e.target.value);
          if (onValueChange) {
            onValueChange(e.target.value);
          }
        }}
      />

      {iconType !== 'default' && (
        <div className="absolute right-2">{iconMap[iconType]}</div>
      )}

      {isDropdownOpen && (
        <div
          className={cn(
            'absolute right-0 top-12 z-30 rounded border bg-white shadow-lg',
            getDropdownSizeStyles(size),
          )}
        >
          {['건대입구', '을지로 3가', '신림', '홍대입구'].map(item => (
            <p
              key={item}
              className={cn(
                'cursor-pointer p-2 transition-all',
                inputValue === item
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
              )}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
