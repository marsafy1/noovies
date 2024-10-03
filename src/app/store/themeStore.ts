import { create } from 'zustand';
import { ThemeStore } from '@/app/interfaces/stateStore/themeStore';
import { persist } from 'zustand/middleware';

const isBrowser = typeof window !== 'undefined';

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: isBrowser ? localStorage.getItem('theme') || 'light' : 'light',
  setTheme: (newTheme: string) => {
    if (isBrowser) {
      localStorage.setItem('theme', newTheme);
    }
    set({ theme: newTheme });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      if (isBrowser) {
        localStorage.setItem('theme', newTheme);
      }
      return { theme: newTheme };
    });
  },
}));
