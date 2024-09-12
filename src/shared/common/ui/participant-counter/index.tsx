import PersonIcon from '@/shared/assets/icons/person-icon';
import { MAX_CAPACITY } from '@/shared/lib/constants';

interface ParticipantCounterProps {
  value: number;
  iconColor: string;
  valueColor: string;
}
export default function ParticipantCounter({
  value,
  iconColor,
  valueColor,
}: ParticipantCounterProps) {
  return (
    <div className="flex items-center gap-[2px]">
      <PersonIcon color={iconColor} />
      <span className={`text-sm font-medium ${valueColor}`}>
        {value}/{MAX_CAPACITY}
      </span>
    </div>
  );
}
