import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/model/information';
import { Progress } from '@/shared/ui/progress';
import Capacity from './Capacity';
import Participants from './Participants';

interface InformationBottomProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes[];
}

export default function InformationBottom({
  gatheringsInfo,
  participantList,
}: InformationBottomProps) {
  return (
    <div className="border-t-2 border-dashed border-gray-200 p-6">
      <Participants
        gatheringsInfo={gatheringsInfo}
        participantList={participantList}
      />
      <Progress
        className="mt-3"
        value={gatheringsInfo.participantCount}
        isClosed={false}
      />
      <Capacity gatheringsInfo={gatheringsInfo} />
    </div>
  );
}
