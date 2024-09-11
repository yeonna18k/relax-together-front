import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/model/informationModel';
import InformationBottom from './InformationBottom';
import InformationTop from './InformationTop';

interface InformationProps {
  gatheringsInfo: GatheringsInfoTypes;
  participantList: ParticipantListTypes[];
}

export default function Information({
  gatheringsInfo,
  participantList,
}: InformationProps) {
  return (
    <>
      <div className="w-full rounded-3xl border-2 border-gray-200 bg-white">
        <InformationTop gatheringsInfo={gatheringsInfo} />
        <InformationBottom
          gatheringsInfo={gatheringsInfo}
          participantList={participantList}
        />
      </div>
    </>
  );
}