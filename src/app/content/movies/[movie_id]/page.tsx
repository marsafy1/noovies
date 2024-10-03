// External libraries
import React from 'react';

// Interface imports
import {
  MovieIDParams,
  DetailedMovie,
  DEFAULT_DETAILED_MOVIE,
} from '@/app/interfaces/movies';

// Component imports
import MovieCoverSection from '@/app/sections/movieDetails/MovieCoverSection';
import MovieInfoSection from '@/app/sections/movieDetails/MovieInfoSection';
import MovieReviewsSection from '@/app/sections/movieDetails/MovieReviewsSection';
import DetailedMetaMovieInfo from '@/app/components/movies/movieDetails/meta/DetailedMetaMovieInfo';
import Empty from '@/app/components/feedback/Empty';

// Styles
import styles from '@/app/styles/content/movieDetails.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default async function page({ params }: { params: MovieIDParams }) {
  let loading = true;
  let error = false;
  let movieDetails: DetailedMovie | null = null;

  async function getMovieDetails() {
    try {
      let data = await get(`movie/${params.movie_id}`, {
        append_to_response: 'videos',
      });
      return data;
    } catch (err) {
      console.error('Error fetching movie details:', err);
      error = true;
      return null;
    }
  }

  // Fetch movie details
  movieDetails = await getMovieDetails();
  loading = false;

  // If there's an error or movie details are not available
  if (error || !movieDetails) {
    return (
      <div className="h-100vh">
        <Empty title="An Error Occurred" />
      </div>
    );
  }
  let trailerKey: string =
    movieDetails.videos.results.length > 0
      ? movieDetails.videos.results[0].key
      : '';

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetails__info}>
        <MovieCoverSection movieDetails={movieDetails} />
        <MovieInfoSection movieDetails={movieDetails} trailerKey={trailerKey} />
      </div>
      <MovieReviewsSection movieId={movieDetails.id} />
    </div>
  );
}
