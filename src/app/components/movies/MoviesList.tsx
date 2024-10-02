import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import MovieCard from './MovieCard';
import styles from '@/app/styles/content/movies.module.scss';

export default function MoviesList({ movies }: { movies: Movie[] }) {
  function isEmptyMovies() {
    return !movies || movies.length == 0;
  }
  return (
    <div className={styles.movies__normalMovies__list}>
      {!isEmptyMovies() &&
        movies.map((movie: Movie, index: number) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      {isEmptyMovies() && <div>Empty</div>}
    </div>
  );
}
