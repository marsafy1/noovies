// External libraries
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';

// Styles
import styles from '@/app/styles/components/movies/info/info.module.scss';

export default function Adult({ adult }: { adult: boolean }) {
  return <div className={styles.adult}>{adult ? '18+' : <BeakerIcon />}</div>;
}
