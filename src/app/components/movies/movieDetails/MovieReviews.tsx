'use client';
import React, { useState, useEffect } from 'react';

import { Review } from '@/app/interfaces/movies';
import ReviewCard from '@/app/components/reviews/ReviewCard';
import styles from '@/app/styles/content/movieDetails.module.scss';
import { get } from '@/app/services/api/requests';

export default function MovieReviews({ movieId }: { movieId: number }) {
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getMovieReviews() {
    try {
      setLoading(true);

      let data = await get(`/movie/${movieId}/reviews`);

      setReviews(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
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
