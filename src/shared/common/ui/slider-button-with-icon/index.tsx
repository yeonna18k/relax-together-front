import React from 'react';

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: 'default' | 'small';
}

const SliderButtonWithIcon: React.FC<ButtonProps> = ({
  label,
  isActive,
  onClick,
  IconComponent,
  size = 'default',
}) => {
  const textSize = size === 'small' ? 'text-base' : 'text-3xl';

  const labelHeight = size === 'small' ? 'h-[20px]' : 'h-[28px]';

  return (
    <div
      onClick={onClick}
      className={`relative z-10 flex cursor-pointer items-center gap-1 ${
        isActive ? 'text-gray-900' : 'text-gray-400'
      }`}
    >
      <IconComponent
        className={` ${isActive ? 'fill-[#1F2937] stroke-[#1F2937]' : 'fill-[#9CA3AF] stroke-[#9CA3AF]'}`}
      />
      <div
        className={`font-pretendard ${labelHeight} items-center text-left font-bold leading-[1] ${textSize}`}
      >
        {label}
      </div>
    </div>
  );
};

export default SliderButtonWithIcon;
