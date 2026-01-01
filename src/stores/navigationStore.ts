import { create } from "zustand";

interface NavigationState {
  isSettings: boolean;
  goToSettings: () => void;
  goToDashboard: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isSettings: false,
  goToSettings: () => set({ isSettings: true }),
  goToDashboard: () => set({ isSettings: false }),
}));
