'use client';

// External libraries
import React, { useState, useEffect } from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Icons
import { Bars3Icon, Squares2X2Icon } from '@heroicons/react/24/solid';

// Components
import MoviesContainer from '@/app/sections/moviesContainer/MoviesContainer';
import MovieSlider from '@/app/sections/moviesContainer/MovieSliderContainer';
import ViewSwitchButton from '@/app/components/utils/Buttons/ViewSwitchButton';

// Styles
import styles from '@/app/styles/sections/movieDisplay.module.scss';

/*
  MovieDisplaySection component (Client Component)
  - Displays movies with various types (e.g., trending, slider, and different view modes).
*/

export default function MoviesDisplaySection({ movies }: { movies: Movie[] }) {
  const [isGrid, setIsGrid] = useState<boolean>(true);

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
