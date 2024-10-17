import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UploadState = {
  isUploading: boolean;
};

type UploadAction = {
  setIsUploading: (isUploading: boolean) => void;
};

export const useUploadStore = create(
  immer<UploadState & UploadAction>(set => ({
    isUploading: false,
    setIsUploading: isUploading => {
      set(state => {
        state.isUploading = isUploading;
      });
    },
  })),
);
