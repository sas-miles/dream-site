import { create } from "zustand";

interface SmartBarState {
  isOpen: boolean;
  toggleOpen: () => void;
  toggleSmartBar: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isChatActive: boolean;
  setIsChatActive: (isChatActive: boolean) => void;
}

export const useSmartBarStore = create<SmartBarState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleSmartBar: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
  isChatActive: false,
  setIsChatActive: (isChatActive) => set({ isChatActive }),
}));
