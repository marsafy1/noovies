import React from 'react';
import styles from '@/app/styles/components/movieDetails/movieInfo.module.scss';

import { DetailedMovie } from '@/app/interfaces/movies';
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import Poster from '@/app/components/movies/movieCards/info/Poster';
import MainMetaMovieInfo from '@/app/components/movies/movieDetails/meta/MainMetaMovieInfo';
import DetailedMetaMovieInfo from '@/app/components/movies/movieDetails/meta/DetailedMetaMovieInfo';
export default function MovieInfo({
  movieDetails,
}: {
  movieDetails: DetailedMovie;
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
        <MainMetaMovieInfo movieDetails={movieDetails} />
        <DetailedMetaMovieInfo movieDetails={movieDetails} />
      </div>
    </div>
  );
}
