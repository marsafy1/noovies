// External libraries
import React from 'react';

// Styles
import styles from '@/app/styles/components/movieDetails/movieInfo.module.scss';

// Interface imports
import { DetailedMovie } from '@/app/interfaces/movies';

// Component imports
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import Poster from '@/app/components/movies/movieCards/info/Poster';
import MainMetaMovieInfo from '@/app/components/movies/movieDetails/meta/MainMetaMovieInfo';
import DetailedMetaMovieInfo from '@/app/components/movies/movieDetails/meta/DetailedMetaMovieInfo';

export default function MovieInfo({
  movieDetails,
  trailerKey,
}: {
  movieDetails: DetailedMovie;
  trailerKey: number;
}) {
  return (
    <div className={styles.movieInfo__meta}>
      <div>
        <Poster poster_path={movieDetails.poster_path} />
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
