// External libraries
import React from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';

// Styles
import styles from '@/app/styles/components/movies/info/info.module.scss';

export default function Runtime({ runtime }: { runtime: number | undefined }) {
  function formatRuntime(runtime_minutes: number) {
    // get hours
    const hours = Math.floor(runtime_minutes / 60);
    const minutes = Math.round(runtime_minutes - hours * 60);
    return `${hours}h ${minutes}m`;
  }

  if (runtime === undefined) {
    return <></>;
  } else {
    return (
      <div className={`${styles.score} movie-info-color`}>
        <div className={styles.score__icon}>
          <ClockIcon />
        </div>
        <div className={styles.score__number}>{formatRuntime(runtime)}</div>
      </div>
    );
  }
}
