import React from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import MovieCard from '@/app/components/movies/movieCards/MovieCard';
import Empty from '@/app/components/feedback/Empty';

// Styles
import moviesStyles from '@/app/styles/content/movies.module.scss';

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
