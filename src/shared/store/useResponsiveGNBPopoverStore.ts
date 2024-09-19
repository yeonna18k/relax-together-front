import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ResponsiveGNBPopoverState = {
  isOpen: boolean;
};

type ResponsiveGNBPopoverAction = {
  resetPopover: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

export const useResponsiveGNBPopoverStore = create(
  immer<ResponsiveGNBPopoverState & ResponsiveGNBPopoverAction>(set => ({
    isOpen: false,
    resetPopover: () => {
      set(state => {
        state.isOpen = false;
      });
    },
    setIsOpen: isOpen => {
      set(state => {
        state.isOpen = isOpen;
      });
    },
  })),
);
