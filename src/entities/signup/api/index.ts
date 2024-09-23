import { apiService } from '@/shared/service/ApiService';
import axios from 'axios';
import { useState } from 'react';
import { User } from '../model/user';
export function useSignup() {
  const signup = async (userData: User) => {
    try {
      const response = await apiService.signup(userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { signup };
}

export function useCheckEmail() {
  const [emailError, setError] = useState<string | null>(null);
  const checkEmail = async (email: string) => {
    try {
      const response = await apiService.checkEmail(email);
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 403) {
          setError(e.response?.statusText);
        }
      }
    }
  };
  return { checkEmail, emailError };
}
