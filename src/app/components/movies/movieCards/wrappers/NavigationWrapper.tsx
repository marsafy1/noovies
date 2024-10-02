'use client';
import React from 'react';
import { navigateToMovieDetails } from '@/app/services/navigation';
import { useRouter } from 'next/navigation';

export default function NavigationWrapper({
  children,
  movieId,
}: {
  children: React.ReactElement;
  movieId: number;
}) {
  const router = useRouter();
  return (
    <div onClick={() => navigateToMovieDetails(router, movieId)}>
      {children}
    </div>
  );
}
