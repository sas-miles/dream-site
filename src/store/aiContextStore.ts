import { create } from "zustand";

interface AiContextState {
  context: string;
  setContext: (context: string) => void;
}

export const useAiContextStore = create<AiContextState>((set) => ({
  context: "",
  setContext: (context) => set({ context }),
}));
