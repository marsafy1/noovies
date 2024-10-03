// External libraries
import React from 'react';

// Interfaces
import { DetailedMovie } from '@/app/interfaces/movies';

// Components
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import Poster from '@/app/components/movies/movieCards/info/Poster';
import MainMetaMovieInfo from '@/app/components/movies/movieDetails/meta/MainMetaMovieInfo';
import DetailedMetaMovieInfo from '@/app/components/movies/movieDetails/meta/DetailedMetaMovieInfo';

// Styles
import styles from '@/app/styles/sections/movieDetails/movieInfo.module.scss';

/*
  MovieInfoSection component
  - Displays the main information and metadata about the movie, including favorite option, poster, and detailed info.
*/

export default function MovieInfoSection({
  movieDetails,
  trailerKey,
}: {
  movieDetails: DetailedMovie;
  trailerKey: string;
}) {
  return (
    <div className={styles.movieInfo__meta}>
      <div className={styles.movieInfo__meta__top}>
        <div className={styles.movieInfo__meta__top__poster}>
          <Poster poster_path={movieDetails.poster_path} size="w780" />
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
