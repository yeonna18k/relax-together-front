'use client';

import DalrempitIcon from '@/shared/assets/icon/DalrempitIcon';
import WorcationIcon from '@/shared/assets/icons/WorcationIcon';
import { useState } from 'react';
import SliderButtonWithIcon from '../slider-button-with-icon';

const SliderButtonContainer = () => {
  const [activeButton, setActiveButton] = useState('dalrempit');

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="relative flex h-[38px] w-[194px] items-center justify-between rounded-lg p-1">
      {/* 슬라이딩 바 */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-[83px] bg-gray-900 transition-transform duration-500 ${
          activeButton === 'worcation'
            ? 'w-[99px] translate-x-[89px]'
            : 'translate-x-0'
        }`}
      ></div>

      {/* 달램핏 버튼 */}
      <SliderButtonWithIcon
        label="달램핏"
        isActive={activeButton === 'dalrempit'}
        onClick={() => handleClick('dalrempit')}
        IconComponent={DalrempitIcon}
      />

      {/* 워케이션 버튼 */}
      <SliderButtonWithIcon
        label="워케이션"
        isActive={activeButton === 'worcation'}
        onClick={() => handleClick('worcation')}
        IconComponent={WorcationIcon}
      />
    </div>
  );
};

export default SliderButtonContainer;
