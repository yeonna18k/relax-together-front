import { User } from '@/shared/model';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserDataAction = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserDataStore = create<UserDataAction>()(
  persist(
    set => ({
      user: null,
      setUser: user => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'signin-user-data',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
