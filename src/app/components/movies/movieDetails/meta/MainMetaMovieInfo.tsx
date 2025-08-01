// External libraries
import React from 'react';

// Interfaces
import { DetailedMovie } from '@/app/interfaces/movies';

// Styles
import styles from '@/app/styles/components/movieDetails/meta/mainMetaMovieInfo.module.scss';

// Components
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Language from '@/app/components/movies/movieCards/info/Language';
import Runtime from '@/app/components/movies/movieCards/info/Runtime';
import ReleaseDate from '@/app/components/movies/movieCards/info/ReleaseDate';
import PlayTrailer from '@/app/components/movies/movieCards/info/PlayTrailer';
import Genre from '@/app/components/movies/movieCards/info/Genre';

/*
  MainMetaMovieInfo component
  - Displays the primary and most important information about the movie.
*/

export default function MainMetaMovieInfo({
  movieDetails,
  trailerKey,
}: {
  movieDetails: DetailedMovie;
  trailerKey: string;
}) {
  return (
    <div className={styles.mainMetaMovieInfo}>
      <div className={styles.mainMetaMovieInfo__header}>
        <span className={styles.mainMetaMovieInfo__header__title}>
          {movieDetails.title}
        </span>
      </div>

      <div className={styles.mainMetaMovieInfo__infoTags}>
        <div className={styles.mainMetaMovieInfo__infoTags__genres}>
          {movieDetails.genres.map((genre, index) => {
            return <Genre key={index} genre={genre} />;
          })}
          <div className="white-circle"></div>
          <b>
            <ReleaseDate
              releaseDate={movieDetails.release_date}
              fullDate={false}
            />
          </b>
        </div>
        <div className={styles.mainMetaMovieInfo__infoTags__quicksAndtips}>
          <VoteAverage average={movieDetails.vote_average} />
          <VoteCount count={movieDetails.vote_count} />
          <Runtime runtime={movieDetails.runtime} />
          <Language lang={movieDetails.original_language} />
          {/* <Adult adult={movieDetails.adult} /> */}
        </div>
      </div>
      <div className={styles.mainMetaMovieInfo__overview}>
        <div>
          <h4>Overview </h4>
          <PlayTrailer trailerKey={trailerKey} />
        </div>
        <span>{movieDetails.overview}</span>
      </div>
    </div>
  );
}
