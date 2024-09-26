import GatheringsDetailMain from '@/entities/gatherings-detail/ui/gatherings-detail-main';
import { apiService } from '@/shared/service/ApiService';

interface GatheringsDetail {
  params: {
    id: string;
  };
}

export default async function GatheringsDetail({ params }: GatheringsDetail) {
  const { id } = params;

  const infoResponse = await apiService.getGatheringsInfo(id);

  console.log('🚀 ~ GatheringsDetail ~ response:', infoResponse.data);

  return <GatheringsDetailMain id={id} gatheringsInfo={infoResponse.data} />;
}
