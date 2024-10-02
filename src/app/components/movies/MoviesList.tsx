// External libraries
import React from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import MovieCard from '@/app/components/movies/MovieCard';
import Empty from '@/app/components/feedback/Empty';

// Styles
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
      {isEmptyMovies() && (
        <div className="h-100-without-nav">
          <Empty title="Nothing found" />
        </div>
      )}
    </div>
  );
}
