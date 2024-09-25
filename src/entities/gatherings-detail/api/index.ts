import { apiService } from '@/shared/service/ApiService';

export const getGatheringsInfo = async (id: string) => {
  try {
    const response = await apiService.getGatheringsInfo(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getParticipantList = async (id: string) => {
  try {
    const response = await apiService.getParticipantList(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
