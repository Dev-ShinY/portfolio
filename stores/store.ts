import { create } from "zustand";

interface ScrollState {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
}));
