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
import NavigationWrapper from './movieCards/wrappers/NavigationWrapper';
import SafeImage from '@/app/components/presentation/SafeImage';

// Asset imports
import BackdropPlaceholder from '@/app/assets/defaults/movies/backdrop-placeholder.png';

// Styles
import styles from '@/app/styles/components/movies/topSideMovie.module.scss';

export default function TopSideMovieCard({
  movie,
  index,
  choosen,
  setAsCurrent,
}: {
  movie: Movie;
  index: number;
  choosen: boolean;
  setAsCurrent: (index: number) => void;
}) {
  function handleClick() {
    setAsCurrent(index);
  }
  return (
    <div
      className={`${styles.topSideMovieCard} ${choosen ? styles.topSideMovieCardChoosen : ''}`}
      onClick={handleClick}
    >
      <SafeImage
        src={'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path}
        altSrc={BackdropPlaceholder}
        imgClassName={styles.topSideMovieCard__backdrop}
        alt="Movie Image"
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
  );
}
