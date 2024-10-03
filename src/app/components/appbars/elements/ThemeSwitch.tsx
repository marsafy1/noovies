'use client';

// External libraries
import { useEffect } from 'react';

// Interfaces
import { ThemeStore } from '@/app/interfaces/stateStore/themeStore';

// Icons
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

// Store imports
import { useThemeStore } from '@/app/store/themeStore';

// Styles
import styles from '@/app/styles/components/appbars/themeSwitch.module.scss';

/*
  ThemeSwitch component (Client Component)
  - Provides functionality to switch between light and dark themes.
*/

export default function ThemeSwitch() {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.themeSwitch} onClick={toggleTheme}>
      {theme === 'light' ? (
        <SunIcon />
      ) : (
        <MoonIcon className={styles.themeSwitch__darkThemeIcon} />
      )}
    </div>
  );
}
