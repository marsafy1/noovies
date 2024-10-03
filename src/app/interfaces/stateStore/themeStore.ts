// Interfaces
export type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};
