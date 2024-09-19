import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/model/information';
import OpenBadge from '@/shared/common/ui/open-badge';
import UserProfileImage from './UserProfileImage';

interface ParticipantsProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes[];
}

export default function Participants({
  gatheringsInfo,
  participantList,
}: ParticipantsProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 text-sm font-semibold text-gray-900">
        <div>
          <span>모집 정원</span>
          <span data-testid="participantCount" className="ml-[6px]">
            {gatheringsInfo.participantCount}명
          </span>
        </div>
        <UserProfileImage
          gatheringsInfo={gatheringsInfo}
          participantList={participantList}
        />
      </div>
      {gatheringsInfo.participantCount >= 5 ? (
        <OpenBadge value={gatheringsInfo.participantCount} />
      ) : null}
    </div>
  );
}
