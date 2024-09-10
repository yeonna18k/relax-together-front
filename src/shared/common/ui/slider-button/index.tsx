'use client';

import { useState } from 'react';

function DalrempitIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="Dalrempit-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.594 11.5c0 .996-.486 1.879-1.233 2.425l1.08.244a.754.754 0 0 1 .515.413l1.828 3.852c.012.025.022.05.032.075l3.007 1.86a1 1 0 1 1-1.051 1.7l-3.436-2.123a1 1 0 0 1-.237-.205.995.995 0 0 1-.311-.402l-.194-.456v1.976c1.811.89 4.654 2.81 3.864 4.59-.845 1.903-4.928.793-6.864 0-1.936.793-6.02 1.903-6.865 0-.79-1.78 2.054-3.7 3.865-4.59v-1.536l-.084.198a.995.995 0 0 1-.31.402.998.998 0 0 1-.239.204l-3.435 2.124a1 1 0 0 1-1.052-1.702l3.008-1.858a.99.99 0 0 1 .032-.076l1.827-3.852c.1-.21.29-.361.515-.413l1.125-.254.071-.022a3 3 0 1 1 4.542-2.574z"
        fill={isActive ? '#1F2937' : '#9CA3AF'}
      />
      <path
        d="m9.594 12.924 1.954-.424M9.613 9.426l1.911.59M11.594 6.5l1.26 1.289M21.29 12.5l-1.955-.424M21.574 9.426l-1.91.59M19.596 6.5l-1.261 1.289M15.594 7V5"
        stroke={isActive ? '#1F2937' : '#9CA3AF'}
        strokeWidth=".8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WorcationIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="Worcation-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 28c0-2.761-4.701-5.5-10.5-5.5S5 25.239 5 28h21z"
        fill={isActive ? '#1F2937' : '#9CA3AF'}
      />
      <rect
        x="11.059"
        y="14.893"
        width="1"
        height="9.526"
        rx=".5"
        transform="rotate(-16.685 11.059 14.893)"
        fill={isActive ? '#1F2937' : '#9CA3AF'}
      />
      <rect
        x="9"
        y="9.287"
        width="1"
        height="1.496"
        rx=".5"
        transform="rotate(-16.685 9 9.287)"
        fill={isActive ? '#1F2937' : '#9CA3AF'}
      />
      <path
        d="M10 10c-4.28 1.142-5.422 5.407-5.422 8.726 0 1.202 1.367 1.386 1.905.31.297-.594.986-.88 1.617-.67l.564.188a2.021 2.021 0 0 0 2.217-.654l.201-.252a2.109 2.109 0 0 1 2.314-.683l.321.107c.75.25 1.573-.054 1.98-.732l.117-.195a1.443 1.443 0 0 1 1.882-.548c1.102.552 2.16-.396 1.484-1.426C17.47 11.56 14.29 8.857 10 10z"
        fill={isActive ? '#1F2937' : '#9CA3AF'}
      />
      <circle
        cx="24.5"
        cy="8"
        r="3.5"
        fill={isActive ? '#1F2937' : '#9CA3AF'}
      />
      <path
        d="M19.75 8h-1M30 8h-1M21.105 11.27l-.707.707M28.354 4.022l-.707.707M21.105 4.73l-.707-.708M28.354 11.978l-.707-.707M24.375 12.625v1M24.375 2.375v1"
        stroke={isActive ? '#1F2937' : '#9CA3AF'}
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  IconComponent: React.FC<{ isActive: boolean }>;
}

function SliderButtonComponent({
  label,
  isActive,
  onClick,
  IconComponent,
}: ButtonProps) {
  return (
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
}

export default function SliderButton() {
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
      <SliderButtonComponent
        label="달램핏"
        isActive={activeButton === 'dalrempit'}
        onClick={() => handleClick('dalrempit')}
        IconComponent={DalrempitIcon}
      />

      {/* 워케이션 버튼 */}
      <SliderButtonComponent
        label="워케이션"
        isActive={activeButton === 'worcation'}
        onClick={() => handleClick('worcation')}
        IconComponent={WorcationIcon}
      />
    </div>
  );
}
