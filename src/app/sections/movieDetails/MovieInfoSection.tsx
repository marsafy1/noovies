// External libraries
import React from 'react';

// Interface imports
import { DetailedMovie } from '@/app/interfaces/movies';

// Component imports
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import Poster from '@/app/components/movies/movieCards/info/Poster';
import MainMetaMovieInfo from '@/app/components/movies/movieDetails/meta/MainMetaMovieInfo';
import DetailedMetaMovieInfo from '@/app/components/movies/movieDetails/meta/DetailedMetaMovieInfo';

// Styles
import styles from '@/app/styles/sections/movieDetails/movieInfo.module.scss';

export default function MovieInfoSection({
  movieDetails,
  trailerKey,
}: {
  movieDetails: DetailedMovie;
  trailerKey: number;
}) {
  return (
    <div className={styles.movieInfo__meta}>
      <div className={styles.movieInfo__meta__top}>
        <div className={styles.movieInfo__meta__top__poster}>
          <Poster poster_path={movieDetails.poster_path} />
        </div>
        <div className={styles.movieInfo__meta__about__bottom}>
          <Favorite movieId={movieDetails.id} />
        </div>
      </div>

      <div className={styles.movieInfo__meta__about}>
        <MainMetaMovieInfo
          movieDetails={movieDetails}
          trailerKey={trailerKey}
        />
        <DetailedMetaMovieInfo movieDetails={movieDetails} />
      </div>
    </div>
  );
}
