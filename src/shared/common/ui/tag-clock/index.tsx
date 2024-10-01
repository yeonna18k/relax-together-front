import Image from 'next/image';

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
        className={`top-[25px] flex min-h-[32px] w-auto items-center gap-2 bg-black bg-opacity-70 p-[4px_10px_4px_8px] ${variant === 'rounded' ? 'rounded-bl-[12px] rounded-tr-3xl shadow-md' : 'rounded-bl-[12px]'}`}
      >
        <Image
          priority
          src="/assets/tag-clock.svg"
          alt="Clock Icon"
          className="order-0 grow-0"
          width={24}
          height={24}
        />
        <div className="w-auto text-[10px] font-medium leading-[12px] text-white sm:text-xs">
          {message}
        </div>
      </div>
    </div>
  );
}
