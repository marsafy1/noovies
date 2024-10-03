'use client';

// External libraries
import React from 'react';
import { useRouter } from 'next/navigation';

// Services
import { navigateToMovieDetails } from '@/app/services/navigation';

/*
  MovieCardWrapper component (Client Component)
  - A wrapper around a movie card that navigates to the movie details page on click.
*/

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
