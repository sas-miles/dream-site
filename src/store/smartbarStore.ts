import { create } from "zustand";

interface SmartBarState {
  isOpen: boolean;
  toggleSmartBar: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isChatActive: boolean;
  setIsChatActive: (isChatActive: boolean) => void;
}

export const useSmartBarStore = create<SmartBarState>((set) => ({
  isOpen: false,
  toggleSmartBar: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
  isChatActive: false,
  setIsChatActive: (isChatActive) => set({ isChatActive }),
}));
