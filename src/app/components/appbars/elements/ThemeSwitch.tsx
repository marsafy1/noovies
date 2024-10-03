'use client';

// External libraries
import { useEffect } from 'react';

// Import interfaces
import { ThemeStore } from '@/app/interfaces/stateStore/themeStore';

// Import Icons
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

// Store imports
import { useThemeStore } from '@/app/store/themeStore';

// Styles
import styles from '@/app/styles/components/appbars/themeSwitch.module.scss';

export default function ThemeSwitch() {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log(document.documentElement.getAttribute('data-theme'));
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
