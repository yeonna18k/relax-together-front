import { Modal } from '@/shared/lib/constants';
import { ValueOf } from '@/shared/lib/utilityTypes';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalState = {
  modal: string[];
};

type ModalType = ValueOf<typeof Modal>;

type ModalAction = {
  openModal: (modalType: ModalType) => void;
  closeModal: (modalType: ModalType) => void;
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
