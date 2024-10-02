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

export default function MovieReviews({ movieId }: { movieId: number }) {
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getMovieReviews() {
    setLoading(true);
    let movieReviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    let res = await fetch(movieReviewsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();

    setLoading(false);
    setReviews(result.results);
  }

  useEffect(() => {
    getMovieReviews();
  }, []);
  return (
    <div className={styles.movieDetails__reviews}>
      <div className={styles.movieDetails__reviews__title}>
        <h3>Reviews</h3>
      </div>
      {!loading && reviews.length > 0 && (
        <div className={styles.movieDetails__reviews__list}>
          {reviews.map((review: Review, index: number) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </div>
      )}
      {!loading && reviews.length == 0 && (
        <div className={styles.movieDetails__reviews__list}>Nothing yet!</div>
      )}
    </div>
  );
}
