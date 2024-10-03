// External libraries
import React from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import MoviesList from '@/app/components/movies/MoviesList';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

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
      <MoviesList movies={movies} />
    </div>
  );
}
