import create from 'zustand';

export const useStore = create((set) => ({
  activeUser: '',
  setActiveUser: (activeUser) => set({ activeUser }),
}));
