import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ReviewState = {
  gatheringId: number;
};

type ReviewAction = {
  setTargetGatheringId: (gatheringId: number) => void;
};

export const useReviewStore = create(
  immer<ReviewState & ReviewAction>(set => ({
    gatheringId: 0,
    setTargetGatheringId: gatheringId => {
      set(state => {
        state.gatheringId = gatheringId;
      });
    },
  })),
);
