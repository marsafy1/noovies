'use client';

// External libraries
import { useEffect, useState } from 'react';

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
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (!mounted) {
    // During server-side rendering, avoid rendering icons to prevent mismatch
    return null;
  }

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
