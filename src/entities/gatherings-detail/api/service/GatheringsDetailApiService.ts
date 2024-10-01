import ApiService from '@/shared/api/service/ApiService';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';

class GatheringsDetailApiService extends ApiService {
  async getGatheringsInfo(id: string) {
    const response = await this.get<GatheringsInfoTypes>(
      `http://localhost:3000/api/gatherings/${id}`,
    );
    return response.data;
  }

  async getParticipantList(id: string) {
    const response = await this.get<ParticipantListTypes>(
      `http://localhost:3000/api/gatherings/${id}/participants`,
    );
    return response.data;
  }
}

export const gatheringsDetailApiService = new GatheringsDetailApiService();
