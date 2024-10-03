// External libraries
import React from 'react';

// Interface imports
import { Review } from '@/app/interfaces/reviews';

// Component imports
import Avatar from '@/app/components/utils/Avatar';
import TextView from '@/app/components/utils/TextView';

// Styles
import styles from '@/app/styles/components/reviews/reviewCard.module.scss';

export default function ReviewCard({ review }: { review: Review }) {
  function convertDateStringToReadableFormat(updated_at: string) {
    const date = new Date(updated_at);
    const readableDate = date.toLocaleString();
    return readableDate;
  }
  function handleClick() {
    let memberURL = `https://www.themoviedb.org/u/${review.author_details.username}`;
    window.open(memberURL, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className={styles.review}>
      <div className={styles.review__header} onClick={handleClick}>
        <div className={styles.review__header__author}>
          <Avatar
            src={`https://image.tmdb.org/t/p/w154${review.author_details.avatar_path}`}
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
      <div className={styles.review__content}>
        <TextView text={review.content} maxLength={240} />
      </div>
    </div>
  );
}
