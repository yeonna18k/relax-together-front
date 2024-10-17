import { ModalType as ModalValueType } from '@/shared/lib/constants';
import { ValueOf } from '@/shared/types/utility';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalState = {
  modal: string[];
};

type ModalValueType = ValueOf<typeof ModalValueType>;

type ModalAction = {
  openModal: (modalValueType: ModalValueType) => void;
  closeModal: (modalValueType: ModalValueType) => void;
  resetModal: () => void;
};

export const useModal = create(
  immer<ModalState & ModalAction>(set => ({
    modal: [],
    openModal: modalValueType => {
      set(state => {
        if (!state.modal.includes(modalValueType)) {
          state.modal.push(modalValueType);
        }
      });
    },
    closeModal: modalValueType => {
      set(state => {
        state.modal = state.modal.filter(type => type !== modalValueType);
      });
    },
    resetModal: () => {
      set(state => {
        state.modal = [];
      });
    },
  })),
);
