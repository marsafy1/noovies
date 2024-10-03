// External libraries
import React from 'react';

// Interface imports
import {
  MovieIDParams,
  DetailedMovie,
  DEFAULT_DETAILED_MOVIE,
} from '@/app/interfaces/movies';

// Component imports
import MovieCover from '@/app/components/movies/movieDetails/MovieCover';
import MovieInfo from '@/app/components/movies/movieDetails/MovieInfo';
import MovieReviews from '@/app/components/movies/movieDetails/MovieReviews';
import DetailedMetaMovieInfo from '@/app/components/movies/movieDetails/meta/DetailedMetaMovieInfo';

// Styles
import styles from '@/app/styles/content/movieDetails.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default async function page({ params }: { params: MovieIDParams }) {
  var loading = true;
  const movieDetails = await getMovieDetails();
  var loading = false;
  var trailerKey: number =
    movieDetails.videos.results.length > 0
      ? movieDetails.videos.results[0].key
      : null;

  async function getMovieDetails() {
    try {
      let data = await get(`movie/${params.movie_id}`, {
        append_to_response: 'videos',
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.movieDetails}>
      {!loading && (
        <div className={styles.movieDetails__info}>
          <MovieCover movieDetails={movieDetails} />
          <MovieInfo movieDetails={movieDetails} trailerKey={trailerKey} />
        </div>
      )}
      {/* <DetailedMetaMovieInfo movieDetails={movieDetails} /> */}
      {!loading && <MovieReviews movieId={movieDetails.id} />}
    </div>
  );
}
