// External libraries
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

// Styles
import styles from '@/app/styles/components/movies/info/info.module.scss';

export default function VoteAverage({ average }: { average: number }) {
  return (
    <div className={`${styles.score} movie-info-color`}>
      <div className={styles.score__icon}>
        <StarIcon />
      </div>
      <div className={styles.score__number}>{average}</div>
    </div>
  );
}
