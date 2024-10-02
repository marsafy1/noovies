import React from 'react';
import { MovieIDParams } from '@/app/interfaces/movies';
import { DetailedMovie, DEFAULT_DETAILED_MOVIE } from '@/app/interfaces/movies';
import MovieCover from '@/app/components/movies/movieDetails/MovieCover';
import MovieInfo from '@/app/components/movies/movieDetails/MovieInfo';
import styles from '@/app/styles/content/movieDetails.module.scss';
import MovieReviews from '@/app/components/movies/movieDetails/MovieReviews';
import { get } from '@/app/services/api/requests';

export default async function page({ params }: { params: MovieIDParams }) {
  var loading = true;
  const movieDetails = await getMovieDetails();
  var loading = false;
  var trailerKey: string =
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
          <MovieInfo movieDetails={movieDetails} />
        </div>
      )}
      {!loading && <MovieReviews movieId={movieDetails.id} />}
    </div>
  );
}
