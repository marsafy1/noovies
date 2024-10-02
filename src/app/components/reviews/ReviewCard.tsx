import React from 'react';
import { Review } from '@/app/interfaces/reviews';
import Avatar from '../utils/Avatar';
import styles from '@/app/styles/components/reviews/reviewCard.module.scss';

export default function ReviewCard({ review }: { review: Review }) {
  function convertDateStringToReadableFormat(updated_at: string) {
    const date = new Date(updated_at);
    const readableDate = date.toLocaleString();
    return readableDate;
  }
  return (
    <div className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__header__author}>
          <Avatar
            src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
          />
          <div className={styles.review__header__author__meta}>
            <div className={styles.review__header__author__meta__name}>
              {review.author}
            </div>
            <div className={styles.review__header__author__meta__time}>
              {convertDateStringToReadableFormat(review.updated_at)}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.review__content}>{review.content}</div>
    </div>
  );
}
