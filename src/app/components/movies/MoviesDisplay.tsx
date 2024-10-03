'use client';
// External libraries
import React, { useState, useEffect } from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Import Icons
import { Bars3Icon, Squares2X2Icon } from '@heroicons/react/24/solid';

// Component imports
import MoviesContainer from '@/app/components/movies/MoviesContainer';
import MovieSlider from '@/app/components/movies/MovieSlider';
import Loading from '@/app/components/feedback/Loading';
import TrendingPlayshow from '@/app/components/movies/TrendingPlayshow';
import ViewSwitchButton from '@/app/components/utils/Buttons/ViewSwitchButton';

// Styles
import styles from '@/app/styles/components/movies/movieDisplay.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default function MoviesDisplay({ movies }: { movies: Movie[] }) {
  const [isGrid, setIsGrid] = useState<boolean>(() => {
    // Get the initial value from localStorage or set it to true by default
    const storedValue = localStorage.getItem('isGrid');
    return storedValue ? JSON.parse(storedValue) : true;
  });

  // Store the value in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isGrid', JSON.stringify(isGrid));
  }, [isGrid]);
  return (
    <div className={styles.movieDisplay}>
      <div className={styles.movieDisplay__options}>
        <div className={styles.movieDisplay__options__btns}>
          <ViewSwitchButton
            title="Film Gallery"
            handleClick={() => setIsGrid(true)}
            selected={isGrid}
            icon={<Squares2X2Icon />}
          />
          <ViewSwitchButton
            title="Cinematic Reels"
            handleClick={() => setIsGrid(false)}
            selected={!isGrid}
            icon={<Bars3Icon />}
          />
        </div>
      </div>

      {isGrid && <MoviesContainer movies={movies} title="Trending movies" />}
      {!isGrid && (
        <div>
          <MovieSlider title="Trending Now" path="/movie/popular" />
          <MovieSlider title="Top Rated" path="/movie/top_rated" />
          <MovieSlider title="Now Playing" path="/movie/now_playing" />
          <MovieSlider title="Coming Soon" path="/movie/upcoming" />
        </div>
      )}
    </div>
  );
}
