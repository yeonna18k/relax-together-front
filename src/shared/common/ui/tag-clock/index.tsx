interface TagClockProps {
  message: string;
  variant?: 'default' | 'rounded';
}

export default function TagClock({
  message,
  variant = 'default',
}: TagClockProps) {
  return (
    <div>
      <div
        data-testid="tag-clock"
        className={`top-[25px] flex min-h-[32px] w-auto items-center gap-2 bg-orange-600 p-[4px_10px_4px_8px] ${variant === 'rounded' ? 'rounded-bl-[12px] rounded-tr-3xl' : 'rounded-bl-[12px]'}`}
      >
        <img
          src="/assets/tag-clock.svg"
          alt="Clock Icon"
          className="order-0 h-[24px] w-[24px] grow-0"
        />
        <div className="w-auto text-[10px] font-medium leading-[12px] text-white sm:text-xs">
          {message}
        </div>
      </div>
    </div>
  );
}
