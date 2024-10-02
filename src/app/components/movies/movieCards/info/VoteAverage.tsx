import React from 'react';
import styles from '@/app/styles/components/movies/info/info.module.scss';
import { StarIcon } from '@heroicons/react/24/solid';

export default function VoteAverage({ average }: { average: number }) {
  return (
    <div className={styles.score}>
      <div className={styles.score__icon}>
        <StarIcon />
      </div>
      <div className={styles.score__number}>{average}</div>
    </div>
  );
}
