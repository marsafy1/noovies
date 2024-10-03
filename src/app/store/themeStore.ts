import { create } from 'zustand';
import { ThemeStore } from '@/app/interfaces/stateStore/themeStore';
import { persist } from 'zustand/middleware';

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (newTheme: string) => {
    localStorage.setItem('theme', newTheme);
    set({ theme: newTheme });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    });
  },
}));
