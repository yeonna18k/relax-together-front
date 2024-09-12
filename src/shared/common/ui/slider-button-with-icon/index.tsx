import React from 'react';

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
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
    <IconComponent
      className={`${isActive ? 'fill-[#1F2937] stroke-[#1F2937]' : 'fill-[#9CA3AF] stroke-[#9CA3AF]'}`}
    />
  </div>
);

export default SliderButtonWithIcon;
