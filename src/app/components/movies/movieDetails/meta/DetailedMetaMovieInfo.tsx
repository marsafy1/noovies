// External libraries
import React from 'react';

// Styles
import styles from '@/app/styles/components/movieDetails/meta/detailedMetaMovieInfo.module.scss';

// Enums
import { memberTypes } from '@/app/enums/memberType';

// Interfaces
import { DetailedMovie } from '@/app/interfaces/movies';

// Components
import MovieMembers from '@/app/components/movies/movieDetails/MovieMembers';

/*
  DetailedMetaMovieInfo component
  - Displays detailed information about the movie, including members like cast and crew.
*/

export default function DetailedMetaMovieInfo({
  movieDetails,
}: {
  movieDetails: DetailedMovie;
}) {
  return (
    <div className={styles.detailedMetaMovieInfo}>
      {/* <div className={styles.detailedMetaMovieInfo__overview}>
        <h4>Overview</h4>
        <span>{movieDetails.overview}</span>
      </div> */}
      <div className={styles.detailedMetaMovieInfo__cast}>
        <div className={styles.detailedMetaMovieInfo__cast__container}>
          <div
            className={styles.detailedMetaMovieInfo__cast__container__members}
          >
            <MovieMembers
              movieId={movieDetails.id}
              castType={memberTypes.cast}
            />
            <MovieMembers
              movieId={movieDetails.id}
              castType={memberTypes.directors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
