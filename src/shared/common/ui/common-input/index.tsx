import ArrowDropdown from '@/shared/assets/icons/arrow-dropdown.svg';
import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/ui/input';
import { useState } from 'react';

type InputIconType = 'default' | 'dropdown';

interface CommonInputProps {
  placeholder?: string;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  iconType?: InputIconType;
  type?: 'text';
  size?: 'xsmall' | 'small' | 'medium' | 'large'; // size 추가
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
      return 'h-[32px] text-xs w-[311px]'; // xsmall
    case 'small':
      return 'h-[40px] text-sm w-[343px]'; // small
    case 'medium':
      return 'h-[44px] text-base w-[360px]'; // medium
    case 'large':
      return 'h-[48px] text-lg w-[472px]'; // large
    default:
      return 'h-8 text-base w-[343px]'; // 기본값 medium
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
      return 'w-[343px]'; // 기본값 medium
  }
};
export default function CommonInput({
  placeholder,
  onValueChange,
  selectedValue,
  iconType = 'default',
  size = 'medium', // 기본 사이즈 medium
}: CommonInputProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedValue || ''); // 인풋 필드에 표시될 값

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 상태 토글
  };

  const handleItemClick = (item: string) => {
    setInputValue(item); // 드롭다운에서 선택된 값 인풋에 반영
    setIsDropdownOpen(false); // 드롭다운 닫기
    if (onValueChange) {
      onValueChange(item); // 외부로 선택된 값 전달
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
        onClick={handleDropdownClick} // 트리거 버튼 역할
        className={`h-6 w-6 transform cursor-pointer transition-all ${
          isDropdownOpen ? 'rotate-180' : ''
        } ${getIconFillColor}`}
      />
    ),
  };

  return (
    <div className="relative flex items-center">
      {/* Input field */}
      <Input
        placeholder={placeholder || '입력해주세요'}
        className={cn(
          'pr-10', // 오른쪽에 여유 공간 추가
          getInputStyles({ selectedValue, iconType }),
          getSizeStyles(size), // 사이즈 스타일 적용
        )}
        onChange={e => {
          setInputValue(e.target.value); // 인풋에서 직접 입력 시에도 값 업데이트
          if (onValueChange) {
            onValueChange(e.target.value); // 외부로 값 전달
          }
        }}
      />

      {/* 오른쪽 아이콘 */}
      {iconType !== 'default' && (
        <div className="absolute right-2">{iconMap[iconType]}</div>
      )}

      {/* 드롭다운 메뉴 (withSize에 맞게 동적 너비 적용) */}
      {isDropdownOpen && (
        <div
          className={cn(
            'absolute right-0 top-12 z-30 rounded border bg-white shadow-lg',
            getDropdownSizeStyles(size), // 드롭다운 사이즈 적용
          )}
        >
          {/* 드롭다운 항목 */}
          {['건대입구', '을지로 3가', '신림', '홍대입구'].map(item => (
            <p
              key={item}
              className={cn(
                'cursor-pointer p-2 transition-all',
                inputValue === item
                  ? 'bg-black text-white' // 선택된 항목 스타일
                  : 'bg-white text-black',
              )}
              onClick={() => handleItemClick(item)} // 항목 클릭 처리
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
