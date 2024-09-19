import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalState = {
  isOpen: boolean;
};

type ModalAction = {
  closeModal: () => void;
  setOpen: (isOpen: boolean) => void;
};

export const useModal = create(
  immer<ModalState & ModalAction>(set => ({
    isOpen: false,
    closeModal: () => {
      set(state => {
        state.isOpen = false;
      });
    },
    setOpen: isOpen => {
      set(state => {
        state.isOpen = isOpen;
      });
    },
  })),
);
