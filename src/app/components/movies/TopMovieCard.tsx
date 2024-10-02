import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Language from '@/app/components/movies/movieCards/info/Language';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Runtime from '@/app/components/movies/movieCards/info/Runtime';
import ReleaseDate from '@/app/components/movies/movieCards/info/ReleaseDate';
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';
import styles from '@/app/styles/components/movies/topMovieCard.module.scss';

export default function TopMovieCard({ movie }: { movie: Movie }) {
  return (
    <NavigationWrapper movieId={movie.id}>
      <div className={styles.topMovieCard}>
        <img
          className={styles.topMovieCard__backdrop}
          src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
        />
        <div className={styles.topMovieCard__info}>
          <div
            className={`${styles.topMovieCard__info__top} d-flex justify-content-between`}
          >
            {/* <Adult adult={movie.adult} /> */}
            {/* <Language lang={movie.original_language} /> */}
          </div>
          <div className={styles.topMovieCard__info__bottom}>
            <div>
              <div className="d-flex align-items-center">
                <span className={styles.topMovieCard__info__bottom__title}>
                  <h1>{movie.title}</h1>
                </span>
                <VoteAverage average={movie.vote_average} />
                <VoteCount count={movie.vote_count} />
              </div>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
}
