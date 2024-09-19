import PersonIcon from '@/shared/assets/icons/person-icon.svg';
import { MAX_CAPACITY } from '@/shared/lib/constants';

interface ParticipantCounterProps {
  participantCount: number;
  iconColor: string;
  valueColor: string;
}
export default function ParticipantCounter({
  participantCount,
  iconColor,
  valueColor,
}: ParticipantCounterProps) {
  return (
    <div className="flex items-center gap-[2px]">
      <PersonIcon className={`${iconColor}`} data-testid="person-icon" />
      <span className={`text-sm font-medium ${valueColor}`}>
        {participantCount}/{MAX_CAPACITY}
      </span>
    </div>
  );
}
