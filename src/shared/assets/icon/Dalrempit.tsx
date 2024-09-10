function DalrempitIcon({
  fillColor = '#111827',
  strokeColor = '#111827',
}: {
  fillColor?: string;
  strokeColor?: string;
}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 28c0-2.761-4.701-5.5-10.5-5.5S5 25.239 5 28h21z"
        fill={fillColor}
      />
      <rect
        x="11.059"
        y="14.893"
        width="1"
        height="9.526"
        rx=".5"
        transform="rotate(-16.685 11.059 14.893)"
        fill={fillColor}
      />
      <rect
        x="9"
        y="9.287"
        width="1"
        height="1.496"
        rx=".5"
        transform="rotate(-16.685 9 9.287)"
        fill={fillColor}
      />
      <path
        d="M10 10c-4.28 1.142-5.422 5.407-5.422 8.726 0 1.202 1.367 1.386 1.905.31.297-.594.986-.88 1.617-.67l.564.188a2.021 2.021 0 0 0 2.217-.654l.201-.252a2.109 2.109 0 0 1 2.314-.683l.321.107c.75.25 1.573-.054 1.98-.732l.117-.195a1.443 1.443 0 0 1 1.882-.548c1.102.552 2.16-.396 1.484-1.426C17.47 11.56 14.29 8.857 10 10z"
        fill={fillColor}
      />
      <circle cx="24.5" cy="8" r="3.5" fill={fillColor} />
      <path
        d="M19.75 8h-1M30 8h-1M21.105 11.27l-.707.707M28.354 4.022l-.707.707M21.105 4.73l-.707-.708M28.354 11.978l-.707-.707M24.375 12.625v1M24.375 2.375v1"
        stroke={strokeColor}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DalrempitIcon;
