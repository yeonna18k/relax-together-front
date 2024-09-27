
import { User } from '../model/user';
import { signupApiService } from './service/SignupApiService';

export function useSignup() {
  const signup = async (userData: User) => {
    try {
      const response = await signupApiService.signup(userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { signup };
}