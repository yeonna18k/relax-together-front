import { Reviews } from '@/features/pagination-reviews/model/reviews';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL, REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';

class GatheringsDetailApiService extends ApiService {
  constructor() {
    super();
  }
  async getGatheringsInfo(id: string) {
    const response = await this.get<GatheringsInfoTypes>(
      `${BASE_URL}/api/gatherings/${id}`,
    );
    return response.data;
  }

  async getParticipantList(id: string) {
    const response = await this.get<ParticipantListTypes>(
      `${BASE_URL}/api/gatherings/${id}/participants`,
    );
    return response.data;
  }

  async getReviewList({
    id,
    currentPage,
  }: {
    id: string;
    currentPage: number;
  }) {
    const response = await this.get<Reviews>(
      `${BASE_URL}/api/gatherings/${id}/reviews`,
      {
        params: {
          page: currentPage,
          size: REVIEWS_PER_PAGE,
        },
      },
    );
    return response.data;
  }

  async joinGathering(id: string) {
    const response = await this.post(`${BASE_URL}/api/gatherings/${id}/join`);
    return response;
  }

  async leaveGathering(id: string) {
    const response = await this.delete(
      `${BASE_URL}/api/gatherings/${id}/leave`,
    );
    return response;
  }

  async cancelGathering(id: string) {
    const response = await this.put(`${BASE_URL}/api/gatherings/${id}/cancel`);
    return response;
  }
}

export const gatheringsDetailApiService = new GatheringsDetailApiService();
