import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import styles from '@/app/styles/content/movies.module.scss';
import MoviesList from '@/app/components/movies/MoviesList';

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
          {title} - <span>{subtitle}</span>
        </h3>
      </div>
      <MoviesList movies={movies} />
    </div>
  );
}
