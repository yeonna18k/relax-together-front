import OpenBadge from '@/shared/common/ui/open-badge';
import { ParticipantListTypes } from '../../model/information';
import UserProfileImage from './UserProfileImage';

interface ParticipantsProps {
  participantList: ParticipantListTypes;
}

export default function Participants({ participantList }: ParticipantsProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3 text-sm font-semibold text-gray-900">
        <div>
          <span>모집 정원</span>
          <span data-testid="participantCount" className="ml-[6px]">
            {participantList.totalElements}명
          </span>
        </div>
        <UserProfileImage participantList={participantList} />
      </div>
      {participantList.totalElements >= 5 ? (
        <OpenBadge value={participantList.totalElements} />
      ) : null}
    </div>
  );
}
