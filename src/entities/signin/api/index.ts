import { apiService } from '@/shared/service/ApiService';
import { User } from '../model/user';

export function useSignin() {
  const signin = async (userData: User) => {
    try {
      const response = await apiService.signin(userData);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
  return { signin };
}
