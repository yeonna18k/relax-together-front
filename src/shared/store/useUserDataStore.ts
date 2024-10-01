import { User } from '@/entities/mypage/model';
import { create } from 'zustand';

type UserDataAction = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserDataStore = create<UserDataAction>(set => ({
  user: null,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null }),
}));
