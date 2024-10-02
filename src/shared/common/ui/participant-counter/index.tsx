import PersonIcon from '@/shared/assets/icons/person-icon.svg';
import { Gathering } from '@/shared/model';

type GatheringCapacityInfo = Pick<Gathering, 'participantCount' | 'capacity'>;
interface ParticipantCounterProps extends GatheringCapacityInfo {
  iconColor: string;
  valueColor: string;
}
export default function ParticipantCounter({
  participantCount,
  capacity,
  iconColor,
  valueColor,
}: ParticipantCounterProps) {
  return (
    <div className="flex items-center gap-[2px]">
      <PersonIcon className={`${iconColor}`} data-testid="person-icon" />
      <span className={`text-sm font-medium ${valueColor}`}>
        {participantCount}/{capacity}
      </span>
    </div>
  );
}
