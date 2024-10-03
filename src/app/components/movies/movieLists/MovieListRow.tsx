// External libraries
import React from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Components
import MovieCard from '@/app/components/movies/movieCards/MovieCard';
import Empty from '@/app/components/feedback/Empty';
import Loading from '@/app/components/feedback/Loading';

// Styles
import styles from '@/app/styles/components/movies/moviesSlider.module.scss';

/*
  MoviesSlider component
  - Displays a row of movies horizontally.
*/

export default function MovieListRow({
  movies,
  loading,
}: {
  movies: Movie[];
  loading: boolean;
}) {
  function isEmptyMovies() {
    return !movies || movies.length == 0;
  }
  return (
    <div className={styles.movieSlider__list}>
      {loading && (
        <div style={{ height: '150px', width: '100%' }}>
          <Loading />
        </div>
      )}
      {!isEmptyMovies() &&
        !loading &&
        movies.map((movie: Movie, index: number) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      {isEmptyMovies() && !loading && (
        <div style={{ height: '150px', width: '100%' }}>
          <Empty title="Nothing found" />
        </div>
      )}
    </div>
  );
}
