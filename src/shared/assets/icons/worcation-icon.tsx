import React from 'react';

interface WorcationIconProps {
  isActive: boolean;
}

const WorcationIcon: React.FC<WorcationIconProps> = ({ isActive }) => {
  const fillColor = isActive ? '#1F2937' : '#9CA3AF';
  const strokeColor = isActive ? '#1F2937' : '#9CA3AF';

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
        d="M26 28C26 25.2386 21.299 22.5 15.5 22.5C9.70101 22.5 5 25.2386 5 28H26Z"
        fill={fillColor}
      />
      <rect
        x="11.0586"
        y="14.8926"
        width="1"
        height="9.52579"
        rx="0.5"
        transform="rotate(-16.685 11.0586 14.8926)"
        fill={fillColor}
      />
      <rect
        x="9"
        y="9.28711"
        width="1"
        height="1.49575"
        rx="0.5"
        transform="rotate(-16.685 9 9.28711)"
        fill={fillColor}
      />
      <path
        d="M10.0009 10C5.71911 11.1418 4.5778 15.4072 4.57812 18.7256C4.57824 19.928 5.94494 20.1119 6.48269 19.0364C6.78003 18.4417 7.46939 18.1562 8.10014 18.3664L8.66388 18.5543C9.46721 18.8221 10.3523 18.5607 10.8813 17.8995L11.0823 17.6483C11.6342 16.9584 12.5577 16.6856 13.396 16.965L13.7171 17.0721C14.4672 17.3221 15.2903 17.0176 15.6971 16.3396L15.8136 16.1455C16.2014 15.4991 17.0215 15.2603 17.6957 15.5974C18.798 16.1486 19.8554 15.2013 19.1801 14.1705C17.4703 11.5608 14.2889 8.85654 10.0009 10Z"
        fill={fillColor}
      />
      <circle cx="24.5" cy="8" r="3.5" fill={fillColor} />
      <path d="M19.75 8L18.75 8" stroke={strokeColor} strokeLinecap="round" />
      <path d="M30 8L29 8" stroke={strokeColor} strokeLinecap="round" />
      <path
        d="M21.1055 11.2704L20.3984 11.9775"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M28.3536 4.02239L27.6465 4.72949"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M21.1055 4.72957L20.3984 4.02246"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M28.3536 11.9776L27.6465 11.2705"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M24.375 12.625L24.375 13.625"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M24.375 2.375L24.375 3.375"
        stroke={strokeColor}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WorcationIcon;
