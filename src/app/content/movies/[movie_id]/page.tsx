'use client';
import React, { useState, useEffect, use } from 'react';
import { MovieIDParams } from '@/app/interfaces/movies';
import {
  DetailedMovie,
  CrewMember,
  CastMember,
  Review,
  DEFAULT_DETAILED_MOVIE,
  DEFAULT_CREW_MEMBER,
} from '@/app/interfaces/movies';
import TopMovieCard from '@/app/components/movies/TopMovieCard';
import Video from '@/app/components/presentation/Video';
import ReviewCard from '@/app/components/reviews/ReviewCard';
import Image from 'next/image';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Language from '@/app/components/movies/movieCards/info/Language';
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import SafeImage from '@/app/components/presentation/SafeImage';
import MovieCover from '@/app/components/movies/movieDetails/MovieCover';
import MovieInfo from '@/app/components/movies/movieDetails/MovieInfo';
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';
import styles from '@/app/styles/content/movieDetails.module.scss';

export default function page({ params }: { params: MovieIDParams }) {
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  const [movieDetails, setMovieDetails] = useState<DetailedMovie>(
    DEFAULT_DETAILED_MOVIE
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>([]);

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

  async function getMovieReviews() {
    let movieReviewsUrl = `https://api.themoviedb.org/3/movie/${params.movie_id}/reviews`;
    let res = await fetch(movieReviewsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();
    setReviews(result.results);
  }

  useEffect(() => {
    getMovieDetails();
    getMovieReviews();
  }, []);

  return (
    <div className={styles.movieDetails}>
      {!loading && (
        <div className={styles.movieDetails__info}>
          <MovieCover movieDetails={movieDetails} />
          <MovieInfo movieDetails={movieDetails} />
        </div>
      )}

      <div className={styles.movieDetails__reviews}>
        <div className={styles.movieDetails__reviews__title}>
          <h3>Reviews</h3>
        </div>
        <div className={styles.movieDetails__reviews__list}>
          {reviews.map((review: Review, index: number) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
}
