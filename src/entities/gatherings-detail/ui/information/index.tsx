import { GatheringsInfoTypes } from '@/entities/gatherings-detail/model/information';
import { apiService } from '@/shared/service/ApiService';
import InformationBottom from './InformationBottom';
import InformationTop from './InformationTop';

interface InformationProps {
  id: string;
  gatheringsInfo: GatheringsInfoTypes;
}

export default async function Information({
  id,
  gatheringsInfo,
}: InformationProps) {
  const participantResponse = await apiService.getParticipantList(id);

  console.log('🚀 ~ GatheringsDetail ~ response:', participantResponse.data);
  return (
    <>
      <div className="w-full rounded-xl border-2 border-gray-200 bg-white">
        <InformationTop gatheringsInfo={gatheringsInfo} />
        <InformationBottom
          gatheringsInfo={gatheringsInfo}
          participantList={participantResponse.data}
        />
      </div>
    </>
  );
}
