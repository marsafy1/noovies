import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import Adult from './movieCards/info/Adult';
import Language from './movieCards/info/Language';
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';
import styles from '@/app/styles/components/movies/topSideMovie.module.scss';

export default function TopSideMovieCard({ movie }: { movie: Movie }) {
  return (
    <NavigationWrapper movieId={movie.id}>
      <div className={styles.topSideMovieCard}>
        <img
          className={styles.topSideMovieCard__backdrop}
          src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
        />
        <div className={styles.topSideMovieCard__info}>
          <div
            className={`${styles.topSideMovieCard__info__top} d-flex justify-content-between`}
          >
            {/* <Adult adult={movie.adult} /> */}
            {/* <Language lang={movie.original_language} /> */}
          </div>
          <div className={styles.topSideMovieCard__info__bottom}>
            <div>
              <div className="d-flex align-items-center">
                <span className={styles.topSideMovieCard__info__bottom__title}>
                  <h4>{movie.title}</h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
}
