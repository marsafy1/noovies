import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import Link from 'next/link';
export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card__background">
        <img
          src={'https://image.tmdb.org/t/p/w780/' + movie.poster_path}
          className="movie-card__poster"
          alt="Movie Image"
        />
      </div>
      <div className="movie-card__info">
        <div className="movie-card__info__top">Top</div>
        <div className="movie-card__info__bottom">Bottom</div>
      </div>

      {/* <Link href={`/content/movies/${movie.id}`}>Details</Link> */}
    </div>
  );
}
