import CheckIcon from '../../../../../public/assets/CheckIcon';

interface CheckProps {
  participantCount: number;
  isDark: boolean;
}

export default function Check({ participantCount, isDark }: CheckProps) {
  const bgColor = isDark ? 'bg-gray-900' : 'bg-orange-500';
  const iconColor = isDark ? '#f97316' : '#ffffff';

  const isOpen = participantCount >= 5 ? true : false;

  return (
    <>
      {isOpen ? (
        <div
          data-testid="check"
          className={`h-[18px] w-[18px] ${bgColor} flex cursor-pointer items-center justify-center rounded-full`}
        >
          <CheckIcon data-testid="check-icon" color={iconColor} />
        </div>
      ) : null}
    </>
  );
}
