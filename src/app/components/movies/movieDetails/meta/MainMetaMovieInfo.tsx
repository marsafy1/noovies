import React from 'react';
import { DetailedMovie } from '@/app/interfaces/movies';
import styles from '@/app/styles/components/movieDetails/meta/mainMetaMovieInfo.module.scss';
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Language from '@/app/components/movies/movieCards/info/Language';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Runtime from '@/app/components/movies/movieCards/info/Runtime';
import ReleaseDate from '@/app/components/movies/movieCards/info/ReleaseDate';

export default function MainMetaMovieInfo({
  movieDetails,
}: {
  movieDetails: DetailedMovie;
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
          {movieDetails.genres.map((genre) => {
            return (
              <div
                className={styles.mainMetaMovieInfo__genres__genre}
                key={genre.id}
              >
                {genre.name}
              </div>
            );
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
        <span>
          <h4>Overview </h4>
          {movieDetails.overview}
        </span>
      </div>
    </div>
  );
}
