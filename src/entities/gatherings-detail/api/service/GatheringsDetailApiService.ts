import { Reviews } from '@/features/pagination-reviews/model/reviews';
import ApiService from '@/shared/api/service/ApiService';
import { REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';

class GatheringsDetailApiService extends ApiService {
  constructor() {
    super();
  }
  private API_URL =
    typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_API_URL;
  async getGatheringsInfo(id: string) {
    const response = await this.get<GatheringsInfoTypes>(
      `${this.API_URL}/api/gatherings/${id}`,
    );
    return response.data;
  }

  async getParticipantList(id: string) {
    const response = await this.get<ParticipantListTypes>(
      `${this.API_URL}/api/gatherings/${id}/participants`,
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
      `${this.API_URL}/api/gatherings/${id}/reviews`,
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
      `${this.API_URL}/api/gatherings/${id}/join`,
    );
    return response.data;
  }

  async leaveGathering(id: string) {
    const response = await this.delete<string>(
      `${this.API_URL}/api/gatherings/${id}/leave`,
    );
    return response.data;
  }

  async cancelGathering(id: string) {
    const response = await this.put<string>(
      `${this.API_URL}/api/gatherings/${id}/cancel`,
    );
    return response.data;
  }
}

export const gatheringsDetailApiService = new GatheringsDetailApiService();
