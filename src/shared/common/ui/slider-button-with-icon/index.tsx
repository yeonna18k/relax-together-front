import React from 'react';

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  IconComponent: React.FC<{ isActive: boolean }>;
}

const SliderButtonWithIcon: React.FC<ButtonProps> = ({
  label,
  isActive,
  onClick,
  IconComponent,
}) => (
  <div
    onClick={onClick}
    className={`relative z-10 flex cursor-pointer items-center gap-1 ${
      isActive ? 'text-gray-900' : 'text-gray-400'
    }`}
  >
    <div className="font-pretendard h-[28px] text-left text-[18px] font-semibold leading-[1.56]">
      {label}
    </div>
    <IconComponent isActive={isActive} />
  </div>
);

export default SliderButtonWithIcon;
