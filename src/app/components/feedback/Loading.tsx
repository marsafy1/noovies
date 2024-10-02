import React from 'react';

// Import icons
import { ArrowPathIcon } from '@heroicons/react/24/solid';

// Import styles
import styles from '@/app/styles/components/feedback/loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__icon}>
        <ArrowPathIcon />
      </div>
      <div className={styles.loading__title}>Loading</div>
    </div>
  );
}
