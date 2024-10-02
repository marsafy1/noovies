// External libraries
import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

// Styles
import styles from '@/app/styles/components/movies/info/info.module.scss';

export default function Language({ lang }: { lang: string }) {
  return (
    <div className={styles.language}>
      <span className={styles.language__icon}>
        <GlobeAltIcon />
      </span>
      <span className={styles.language__value}>{lang.toUpperCase()}</span>
    </div>
  );
}
