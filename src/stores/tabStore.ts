import { create } from "zustand";

type Tab = "home" | "servico" | "localizacao";

interface TabState {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: "home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
