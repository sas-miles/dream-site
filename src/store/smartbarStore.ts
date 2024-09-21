import { create } from "zustand";

interface SmartBarState {
  isOpen: boolean;
  toggleSmartBar: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSmartBarStore = create<SmartBarState>((set) => ({
  isOpen: false,
  toggleSmartBar: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

// Selector to check if the SmartBar is open
export const useIsSmartBarOpen = () =>
  useSmartBarStore((state) => state.isOpen);
