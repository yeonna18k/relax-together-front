'use client';

import DalrempitIcon from '@/shared/assets/icons/dalrempit-icon.svg';
import WorcationIcon from '@/shared/assets/icons/worcation-icon.svg';
import SliderButtonWithIcon from '@/shared/common/ui/slider-button-with-icon';
import { useState } from 'react';

interface SliderButtonContainerProps {
  size?: 'default' | 'small';
}

const SliderButtonContainer: React.FC<SliderButtonContainerProps> = ({
  size = 'default',
}) => {
  const [activeButton, setActiveButton] = useState('dalrempit');

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const containerHeight = size === 'small' ? 'h-[48px]' : 'h-[68px]';
  const containerWidth = size === 'small' ? 'w-[190px]' : 'w-[288px]';
  const gap = size === 'small' ? 'gap-3' : 'gap-6';

  // 슬라이딩 바의 너비와 위치를 조정
  const sliderWidth =
    activeButton === 'worcation'
      ? size === 'small'
        ? 'w-[100px]'
        : 'w-[140px]'
      : size === 'small'
        ? 'w-[82px]'
        : 'w-[120px]';

  const translateX =
    activeButton === 'worcation'
      ? size === 'small'
        ? 'translate-x-[85px]'
        : 'translate-x-[140px]'
      : 'translate-x-0';

  return (
    <div
      className={`relative flex ${containerHeight} ${containerWidth} items-center ${gap} rounded-lg p-1`}
    >
      {/* 슬라이딩 바 */}
      <div
        className={`absolute bottom-0 left-1.5 h-[2px] ${sliderWidth} bg-gray-900 transition-transform duration-500 ${translateX}`}
      ></div>

      {/* 달램핏 버튼 */}
      <SliderButtonWithIcon
        label="달램핏"
        isActive={activeButton === 'dalrempit'}
        onClick={() => handleClick('dalrempit')}
        IconComponent={DalrempitIcon}
        size={size}
      />

      {/* 워케이션 버튼 */}
      <SliderButtonWithIcon
        label="워케이션"
        isActive={activeButton === 'worcation'}
        onClick={() => handleClick('worcation')}
        IconComponent={WorcationIcon}
        size={size}
      />
    </div>
  );
};

export default SliderButtonContainer;
