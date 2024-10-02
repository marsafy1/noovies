import React from 'react';
import styles from '@/app/styles/components/movies/info/info.module.scss';
import { UsersIcon } from '@heroicons/react/24/solid';

export default function VoteCount({ count }: { count: number }) {
  return (
    <div className={styles.score}>
      <div className={styles.score__icon}>
        <UsersIcon />
      </div>
      <div className={styles.score__number}>{count}</div>
    </div>
  );
}
