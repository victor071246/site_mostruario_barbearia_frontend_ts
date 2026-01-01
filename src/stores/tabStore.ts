import { create } from "zustand";

interface TabState {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: 1,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
