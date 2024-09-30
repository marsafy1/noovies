import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import Adult from './movieCards/info/Adult';
import Language from './movieCards/info/Language';
import VoteAverage from './movieCards/info/VoteAverage';
import VoteCount from './movieCards/info/VoteCount';
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';
import Favorite from './movieCards/actions/Favorite';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card__darken"></div>
      <div className="movie-card__background">
        <img
          src={'https://image.tmdb.org/t/p/w780/' + movie.poster_path}
          className="movie-card__poster"
          alt="Movie Image"
        />
      </div>
      <NavigationWrapper movieId={movie.id}>
        <div className="movie-card__info">
          <div className="movie-card__info__top">
            <Language lang={movie.original_language} />
            <Adult adult={movie.adult} />
          </div>
          <div className="movie-card__info__bottom">
            <VoteAverage average={movie.vote_average} />
            <VoteCount count={movie.vote_count} />
          </div>
        </div>
      </NavigationWrapper>
      <div className="d-flex justify-content-center">
        <Favorite movieId={movie.id} />
      </div>

      {/* <Link href={`/content/movies/${movie.id}`}>Details</Link> */}
    </div>
  );
}
