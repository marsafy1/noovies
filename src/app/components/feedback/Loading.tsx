// External libraries
import React from 'react';

// Icons
import { ArrowPathIcon } from '@heroicons/react/24/solid';

// Styles
import styles from '@/app/styles/components/feedback/loading.module.scss';

/*
  Loading component
  - Displays a loading spinner to indicate content is loading.
*/

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
