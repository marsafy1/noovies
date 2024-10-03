// External libraries
import React from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Components
import MovieCard from '@/app/components/movies/movieCards/MovieCard';

// Styles
import moviesStyles from '@/app/styles/content/movies.module.scss';

/*
  FavoritesSection component
  - Displays the user's favorite movies in a list or shows an empty state if no favorites are available.
*/

export default function FavoritesSection({
  favorites,
}: {
  favorites: Movie[];
}) {
  return (
    <div className={moviesStyles.movies__normalMovies__list}>
      {favorites.map((movie: Movie, index: number) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </div>
  );
}
