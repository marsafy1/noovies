'use client';

// External libraries
import React from 'react';
import { useRouter } from 'next/navigation';

// Service imports
import { navigateToMovieDetails } from '@/app/services/navigation';

export default function NavigationWrapper({
  children,
  movieId,
}: {
  children: React.ReactElement;
  movieId: number;
}) {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => navigateToMovieDetails(router, movieId)}
    >
      {children}
    </div>
  );
}
