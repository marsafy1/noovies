// External libraries
import React from 'react';

// Icons
import { FaceFrownIcon } from '@heroicons/react/24/solid';

// Styles
import styles from '@/app/styles/components/feedback/empty.module.scss';

/*
  Empty component (Client Component)
  - Displays a customized message when there is no content available.
*/

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
