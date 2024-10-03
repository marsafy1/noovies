// External libraries
import React from 'react';

// Interface imports
import { DetailedMovie } from '@/app/interfaces/movies';

// Styles
import styles from '@/app/styles/components/movieDetails/meta/mainMetaMovieInfo.module.scss';

// Component imports
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Language from '@/app/components/movies/movieCards/info/Language';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Runtime from '@/app/components/movies/movieCards/info/Runtime';
import ReleaseDate from '@/app/components/movies/movieCards/info/ReleaseDate';
import PlayTrailer from '@/app/components/movies/movieCards/info/PlayTrailer';
import Genre from '@/app/components/movies/movieCards/info/Genre';

export default function MainMetaMovieInfo({
  movieDetails,
  trailerKey,
}: {
  movieDetails: DetailedMovie;
  trailerKey: number;
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
          {/* <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`} // Autoplay and mute parameters
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <PlayTrailer trailerKey={trailerKey} />
        </div>
        <span>{movieDetails.overview}</span>
      </div>
    </div>
  );
}
