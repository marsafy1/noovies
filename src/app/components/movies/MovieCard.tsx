import React from 'react';
import { Movie } from '@/app/interfaces/movies';

import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Language from '@/app/components/movies/movieCards/info/Language';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Runtime from '@/app/components/movies/movieCards/info/Runtime';
import ReleaseDate from '@/app/components/movies/movieCards/info/ReleaseDate';

import NavigationWrapper from '@/app/components/movies/movieCards/wrappers/NavigationWrapper';
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import SafeImage from '@/app/components/presentation/SafeImage';
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';
import styles from '@/app/styles/components/movies/movieCard.module.scss';

export default function MovieCard({ movie }: { movie: Movie }) {
  const posterSrc: string =
    `https://image.tmdb.org/t/p/w780/${movie.poster_path}`.toString();
  return (
    <div className={styles.movieCardContainer}>
      <div className={styles.movieCard}>
        <div className={styles.movieCard__darken}></div>
        <div className={styles.movieCard__background}>
          <SafeImage
            src={posterSrc}
            altSrc={PosterPlaceholder}
            imgClassName="movieCard__poster"
            alt="Movie Image"
            width={250}
            height={350}
          />
        </div>
        <div>
          <NavigationWrapper movieId={movie.id}>
            <div className={styles.movieCard__info}>
              <div className={styles.movieCard__info__top}>
                <Language lang={movie.original_language} />
                <Adult adult={movie.adult} />
              </div>
              <div className={styles.movieCard__info__bottom}>
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
