import React from 'react';
import {
  DetailedMovie,
  CrewMember,
  CastMember,
  Review,
  DEFAULT_CREW_MEMBER,
} from '@/app/interfaces/movies';
import styles from '@/app/styles/components/movieDetails/meta/mainMetaMovieInfo.module.scss';

export default function MainMetaMovieInfo({
  movieDetails,
}: {
  movieDetails: DetailedMovie;
}) {
  return (
    <div className={styles.mainMetaMovieInfo}>
      <div className={styles.mainMetaMovieInfo__title}>
        {movieDetails.title}
        <br />
        {movieDetails.release_date}
      </div>
      <div className={styles.mainMetaMovieInfo__genres}>
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
      </div>
    </div>
  );
}
