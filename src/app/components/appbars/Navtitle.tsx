'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Navtitle() {
  const router = useRouter();
  function goHome() {
    router.push('/');
  }
  return (
    <div className="navbar__start__title" onClick={goHome}>
      noovies
    </div>
  );
}
