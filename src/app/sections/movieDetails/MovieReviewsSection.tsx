'use client';

// External libraries
import React, { useState, useEffect } from 'react';

// Interfaces
import { Review } from '@/app/interfaces/reviews';

// Components
import ReviewCard from '@/app/components/reviews/ReviewCard';
import Empty from '@/app/components/feedback/Empty';

// Styles
import styles from '@/app/styles/content/movieDetails.module.scss';

// Services
import { get } from '@/app/services/api/requests';

/*
  MovieReviewsSection component (Client Component)
  - Displays the reviews for the movie, with a fallback for empty state.
*/

export default function MovieReviewsSection({ movieId }: { movieId: number }) {
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
      {!loading && reviews.length == 0 && <Empty title="No Reviews yet" />}
    </div>
  );
}
