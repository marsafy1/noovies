'use client';

// External libraries
import React from 'react';
import { useRouter } from 'next/navigation';

// Styles
import styles from '@/app/styles/components/appbars/navbar.module.scss';

export default function Navtitle() {
  const router = useRouter();
  function goHome() {
    router.push('/');
  }
  return (
    <div>
      <div className={styles.navbar__start__title} onClick={goHome}>
        noovies
      </div>
      <div className={styles.navbar__start__char} onClick={goHome}>
        n
      </div>
    </div>
  );
}
