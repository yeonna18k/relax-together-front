import CheckIcon from '@/shared/assets/icons/check-icon.svg';

interface CheckProps {
  participantCount: number;
  isDark?: boolean;
}

export default function Check({
  participantCount,
  isDark = false,
}: CheckProps) {
  const bgColor = isDark ? 'bg-gray-900' : 'bg-pink-500';
  const iconColor = isDark ? 'stroke-pink-500' : 'stroke-white';

  const isOpen = participantCount >= 5 ? true : false;

  return (
    <>
      {isOpen ? (
        <div
          data-testid="check"
          className={`h-[18px] w-[18px] ${bgColor} flex cursor-pointer items-center justify-center rounded-full`}
        >
          <CheckIcon data-testid="check-icon" className={`${iconColor}`} />
        </div>
      ) : null}
    </>
  );
}
