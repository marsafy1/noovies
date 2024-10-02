import React from 'react';

// Import icons
import { FaceFrownIcon } from '@heroicons/react/24/solid';

// Import styles
import styles from '@/app/styles/components/feedback/empty.module.scss';

export default function Empty({ title }: { title: string }) {
  return (
    <div className={styles.empty}>
      <div className={styles.empty__icon}>
        <FaceFrownIcon />
      </div>
      <div className={styles.empty__title}>{title}</div>
    </div>
  );
}
