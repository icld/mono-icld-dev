import { useCallback } from 'react';
import { persist } from 'zustand/middleware';

import create from 'zustand';

export const useStore = create(
  persist((set, get) => ({
    sessionUser: [],
    setSessionUser: (sessionUser) => set({ sessionUser }),
  }))
);