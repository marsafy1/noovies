// External libraries
import React from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Language from '@/app/components/movies/movieCards/info/Language';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Runtime from '@/app/components/movies/movieCards/info/Runtime';
import ReleaseDate from '@/app/components/movies/movieCards/info/ReleaseDate';
import NavigationWrapper from '@/app/components/movies/movieCards/wrappers/NavigationWrapper';
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import SafeImage from '@/app/components/presentation/SafeImage';

// Asset imports
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';

// Styles
import styles from '@/app/styles/components/movies/movieCard.module.scss';

export default function MovieCard({ movie }: { movie: Movie }) {
  const posterSrc: string =
    `https://image.tmdb.org/t/p/w342/${movie.poster_path}`.toString();
  return (
    <div className={styles.movieCardContainer}>
      <div className={styles.movieCard}>
        <div className={styles.movieCard__darken}></div>
        <div className={styles.movieCard__background}>
          <SafeImage
            src={posterSrc}
            altSrc={PosterPlaceholder}
            alt="Movie Image"
            width={2}
            height={3}
          />
        </div>
        <div>
          <NavigationWrapper movieId={movie.id}>
            <div className={styles.movieCard__info}>
              <div className={styles.movieCard__info__top}>
                <Language lang={movie.original_language} />
                {/* <Adult adult={movie.adult} /> */}
                <ReleaseDate
                  releaseDate={movie.release_date}
                  fullDate={false}
                />
              </div>
              <div className={styles.movieCard__info__bottom}>
                <VoteAverage average={movie.vote_average} />
                <VoteCount count={movie.vote_count} />
              </div>
            </div>
          </NavigationWrapper>
        </div>
      </div>
      <div className={styles.movieCard__fav}>
        <Favorite movieId={movie.id} />
      </div>
    </div>
  );
}
