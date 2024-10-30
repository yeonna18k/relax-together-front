import { create } from 'zustand';

type LikeStore = {
  likedIds: string[];
  setLikedIds: (ids: string[]) => void;
  removeLikedId: (id: string) => void;
};

export const useLikeStore = create<LikeStore>(set => ({
  likedIds: [],
  setLikedIds: ids => set({ likedIds: ids }),
  removeLikedId: id =>
    set(state => ({
      likedIds: state.likedIds.filter(item => item !== id),
    })),
}));
