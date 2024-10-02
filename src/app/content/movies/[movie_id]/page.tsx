'use client';
import React, { useState, useEffect, use } from 'react';
import { MovieIDParams } from '@/app/interfaces/movies';
import { DetailedMovie, DEFAULT_DETAILED_MOVIE } from '@/app/interfaces/movies';
import MovieCover from '@/app/components/movies/movieDetails/MovieCover';
import MovieInfo from '@/app/components/movies/movieDetails/MovieInfo';
import styles from '@/app/styles/content/movieDetails.module.scss';
import MovieReviews from '@/app/components/movies/movieDetails/MovieReviews';

export default function page({ params }: { params: MovieIDParams }) {
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  const [movieDetails, setMovieDetails] = useState<DetailedMovie>(
    DEFAULT_DETAILED_MOVIE
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [trailerKey, setTrailerKey] = useState<string>('');

  async function getMovieDetails() {
    setLoading(true);
    let movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.movie_id}?append_to_response=videos`;
    let res = await fetch(movieDetailsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();

    if (result.videos.results.length > 0) {
      console.log(result);
      setTrailerKey(result.videos.results[0]['key']);
    }
    setLoading(false);
    setMovieDetails(result);
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

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
