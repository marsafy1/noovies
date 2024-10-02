import React, { useState, useEffect } from 'react';

import { Review } from '@/app/interfaces/movies';
import ReviewCard from '@/app/components/reviews/ReviewCard';
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
