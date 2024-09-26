import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalState = {
  modal: string[];
};

type ModalAction = {
  openModal: (modalType: string) => void;
  closeModal: (modalType: string) => void;
  resetModal: () => void;
};

export const useModal = create(
  immer<ModalState & ModalAction>(set => ({
    modal: [],
    openModal: modalType => {
      set(state => {
        if (!state.modal.includes(modalType)) {
          state.modal.push(modalType);
        }
      });
    },
    closeModal: modalType => {
      set(state => {
        state.modal = state.modal.filter(type => type !== modalType);
      });
    },
    resetModal: () => {
      set(state => {
        state.modal = [];
      });
    },
  })),
);
