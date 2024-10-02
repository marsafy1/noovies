'use client';
// External imports
import React, { useEffect, useState } from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import TopMovieCard from '@/app/components/movies/TopMovieCard';
import TopSideMovieCard from '@/app/components/movies/TopSideMovieCard';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

export default function TrendingPlayshow({
  trendingMovies,
}: {
  trendingMovies: Movie[];
}) {
  const [shownMovieIndex, setShownMovieIndex] = useState<number>(0);

  function handleNextIndex() {
    setShownMovieIndex((prevIndex) => (prevIndex + 1) % trendingMovies.length);
  }

  useEffect(() => {
    const intervalId = setInterval(handleNextIndex, 6000);
    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [trendingMovies.length]); // Adding dependency to clear and set the interval when the length changes

  return (
    <div className={styles.movies__topMovies__list}>
      <div>
        <TopMovieCard
          key={trendingMovies[shownMovieIndex].id}
          movie={trendingMovies[shownMovieIndex]}
        />
      </div>
      <div className={styles.movies__topMovies__list__topSideMovies}>
        <div className={styles.movies__topMovies__list__topSideMovies__list}>
          {trendingMovies.map((movie: Movie, index: number) => {
            return (
              <TopSideMovieCard
                key={index}
                index={index}
                movie={movie}
                choosen={index === shownMovieIndex}
                setAsCurrent={setShownMovieIndex}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
