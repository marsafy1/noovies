import React, { use } from 'react';
import { Movie } from '@/app/interfaces/movies';
import Adult from './movieCards/info/Adult';
import Language from './movieCards/info/Language';
import VoteAverage from './movieCards/info/VoteAverage';
import VoteCount from './movieCards/info/VoteCount';
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';

export default function TopSideMovieCard({ movie }: { movie: Movie }) {
  return (
    <NavigationWrapper movieId={movie.id}>
      <div className="top-movie-card">
        <img
          className="top-movie-card__backdrop"
          src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
        />
        <div className="top-movie-card__info">
          <div className="top-movie-card__info__top d-flex justify-content-between">
            <Adult adult={movie.adult} />
            <Language lang={movie.original_language} />
          </div>
          <div className="top-movie-card__info__bottom">
            <div>
              <div className="d-flex align-items-center">
                <span>
                  <h4>{movie.title}</h4>
                </span>
                <VoteAverage />
                <VoteCount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
}
