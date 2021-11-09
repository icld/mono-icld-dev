import create from 'zustand';

export const useStore = create((set) => ({
  sessionUser: '',
  setSessionUser: (sessionUser) => set({ sessionUser }),
}));
