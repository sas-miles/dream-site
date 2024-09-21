import { create } from "zustand";

interface AnimationState {
  currentScreen: string;
  targetScreen: string;
  direction: "normal" | "reverse";
  isAnimating: boolean;
  introSequenceReady: boolean;
  setIntroSequenceReady: (ready: boolean) => void;
  setIsAnimating: (isAnimating: boolean) => void;
  setCurrentScreen: (screen: string) => void;
  setTargetScreen: (screen: string) => void;
  setDirection: (direction: "normal" | "reverse") => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  currentScreen: "Intro",
  targetScreen: "Intro",
  direction: "normal",
  isAnimating: false,
  introSequenceReady: false,
  setIntroSequenceReady: (ready: boolean) => set({ introSequenceReady: ready }),
  setCurrentScreen: (screen) => set({ currentScreen: screen }),
  setTargetScreen: (screen) => set({ targetScreen: screen }),
  setDirection: (direction) => set({ direction }),
  setIsAnimating: (isAnimating) => set({ isAnimating }),
}));
