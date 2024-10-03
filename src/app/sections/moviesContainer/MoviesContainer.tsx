// External libraries
import React from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Components
import MoviesList from '@/app/components/movies/movieLists/MoviesList';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

/*
  MovieVerticalContainer component
  - Displays a vertical list of movies.
*/

export default function MoviesContainer({
  movies,
  title,
  subtitle,
}: {
  movies: Movie[];
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={styles.movies__normalMovies}>
      <div className={styles.movies__normalMovies__subtitle}>
        <h3>
          {title}
          {subtitle && <span className="card-header-color"> - {subtitle}</span>}
        </h3>
      </div>
      <MoviesList initialMovies={movies} />
    </div>
  );
}
