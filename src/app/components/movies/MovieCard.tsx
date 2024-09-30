import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import Adult from './movieCards/info/Adult';
import Language from './movieCards/info/Language';
import VoteAverage from './movieCards/info/VoteAverage';
import VoteCount from './movieCards/info/VoteCount';
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';
import Favorite from './movieCards/actions/Favorite';
import SafeImage from '../presentation/SafeImage';
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';

export default function MovieCard({ movie }: { movie: Movie }) {
  const posterSrc: string =
    `https://image.tmdb.org/t/p/w780/${movie.poster_path}`.toString();
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <div className="movie-card__darken"></div>
        <div className="movie-card__background">
          <SafeImage
            src={posterSrc}
            altSrc={PosterPlaceholder}
            imgClassName="movie-card__poster"
            alt="Movie Image"
            width={250}
            height={350}
          />
        </div>
        <div>
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
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Favorite movieId={movie.id} />
      </div>
    </div>
  );
}
