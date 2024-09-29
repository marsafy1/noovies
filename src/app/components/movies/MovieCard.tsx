import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import Adult from './movieCards/info/Adult';
import Language from './movieCards/info/Language';
import VoteAverage from './movieCards/info/VoteAverage';
import VoteCount from './movieCards/info/VoteCount';
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <NavigationWrapper movieId={movie.id}>
      <div className="movie-card">
        <div className="movie-card__background">
          <img
            src={'https://image.tmdb.org/t/p/w780/' + movie.poster_path}
            className="movie-card__poster"
            alt="Movie Image"
          />
        </div>
        <div className="movie-card__info">
          <div className="movie-card__info__top">
            <Language lang={movie.original_language} />
            <Adult adult={movie.adult} />
          </div>
          <div className="movie-card__info__bottom">
            <VoteAverage />
            <VoteCount />
          </div>
        </div>

        {/* <Link href={`/content/movies/${movie.id}`}>Details</Link> */}
      </div>
    </NavigationWrapper>
  );
}
