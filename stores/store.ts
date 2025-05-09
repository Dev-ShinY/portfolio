import { create } from "zustand";

interface ScrollState {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  scrollEnabled: boolean;
  setScrollEnabled: (enabled: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),

  scrollEnabled: true,
  setScrollEnabled: (enabled) => set({ scrollEnabled: enabled }),
}));
