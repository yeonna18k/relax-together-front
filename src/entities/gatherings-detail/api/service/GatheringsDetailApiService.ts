import { Reviews } from '@/features/pagination-reviews/model/reviews';
import ApiService from '@/shared/api/service/ApiService';
import { REVIEWS_PER_PAGE } from '@/shared/lib/constants';
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

  async getReviewList({
    id,
    currentPage,
  }: {
    id: string;
    currentPage: number;
  }) {
    const response = await this.get<Reviews>(
      `/api/gatherings/${id}/reviews`, // msw
      // `http://localhost:3000/api/gatherings/${id}/reviews`,
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
    const response = await this.post<string>(
      `/api/gatherings/${id}/join`, // msw
      // `http://localhost:3000/api/gatherings/${id}/join`,
    );
    return response.data;
  }

  async leaveGathering(id: string) {
    const response = await this.delete<string>(
      `/api/gatherings/${id}/leave`, // msw
      // `http://localhost:3000/api/gatherings/${id}/join`,
    );
    return response.data;
  }

  async cancelGathering(id: string) {
    const response = await this.put<string>(
      `/api/gatherings/${id}/cancel`, // msw
      // `http://localhost:3000/api/gatherings/${id}/join`,
    );
    return response.data;
  }
}

export const gatheringsDetailApiService = new GatheringsDetailApiService();
