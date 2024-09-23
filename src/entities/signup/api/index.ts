import axios from 'axios';
import { User } from '../model/user';

export function useSignup() {
  const signup = async (userData: User) => {
    try {
      const response = await axios.post(
        'https://dev.relax-together.shop/api/auths/signup',
        userData,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { signup };
}
