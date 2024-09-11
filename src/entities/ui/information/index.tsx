import InformationBottom from './InformationBottom';
import InformationTop from './InformationTop';

export type GatheringsInfoTypes = {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string;
};

export type ParticipantListTypes = {
  teamId: number;
  userId: number;
  gatheringId: number;
  joinedAt: string;
  User: {
    id: number;
    email: string;
    name: string;
    companyName: string;
    image: string;
  };
};

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
