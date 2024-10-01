'use client';
import { useRouter } from 'next/navigation';
import styles from '@/app/styles/components/appbars/navbar.module.scss';
import React from 'react';

export default function Navtitle() {
  const router = useRouter();
  function goHome() {
    router.push('/');
  }
  return (
    <div className={styles.navbar__start__title} onClick={goHome}>
      noovies
    </div>
  );
}
