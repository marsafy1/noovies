import React, { useState, useEffect } from 'react';
import styles from '@/app/styles/components/movieDetails/movieInfo.module.scss';
import SafeImage from '@/app/components/presentation/SafeImage';
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';
import {
  DetailedMovie,
  CrewMember,
  CastMember,
  Review,
  DEFAULT_CREW_MEMBER,
} from '@/app/interfaces/movies';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Language from '@/app/components/movies/movieCards/info/Language';
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
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
      <Poster poster_path={movieDetails.poster_path} />
      <div className={styles.movieInfo__meta__about}>
        <MainMetaMovieInfo movieDetails={movieDetails} />
        <DetailedMetaMovieInfo movieDetails={movieDetails} />
        <div className={styles.movieInfo__meta__about__bottom}>
          <Favorite movieId={movieDetails.id} />
        </div>
      </div>
    </div>
  );
}
