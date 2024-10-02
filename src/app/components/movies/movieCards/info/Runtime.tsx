import React from 'react';
import styles from '@/app/styles/components/movies/info/info.module.scss';
import { ClockIcon } from '@heroicons/react/24/solid';

export default function Runtime({ runtime }: { runtime: number | undefined }) {
  function formatRuntime(runtime_minutes: number) {
    // get hours
    const hours = Math.round(runtime_minutes / 60);
    const minutes = Math.round(runtime_minutes - hours * 60);
    return `${hours}h ${minutes}m`;
  }

  if (runtime === undefined) {
    return <></>;
  } else {
    return (
      <div className={styles.score}>
        <div className={styles.score__icon}>
          <ClockIcon />
        </div>
        <div className={styles.score__number}>{formatRuntime(runtime)}</div>
      </div>
    );
  }
}
