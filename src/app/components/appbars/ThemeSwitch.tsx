'use client';

// External libraries
import { useEffect } from 'react';

// Store imports
import { useThemeStore } from '@/app/store/themeStore';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log(document.documentElement.getAttribute('data-theme'));
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}
