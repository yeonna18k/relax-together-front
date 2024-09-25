import { apiService } from '@/shared/service/ApiService';
import { UseFormReturn } from 'react-hook-form';
import { User } from '../model/user';

export function useSignin(form: UseFormReturn) {
  const signin = async (userData: User) => {
    try {
      const response = await apiService.signin(userData);
      return response.data;
    } catch (e) {
      console.error(e);
      form.setError('email', {
        message: '아이디 또는 비밀번호를 확인해주세요.',
      });
      form.setError('password', {
        message: '아이디 또는 비밀번호를 확인해주세요.',
      });
    }
  };
  return { signin };
}
