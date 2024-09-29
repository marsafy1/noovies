import React from 'react';
import { Review } from '@/app/interfaces/movies';
import Avatar from '../utils/Avatar';

export default function ReviewCard({ review }: { review: Review }) {
  function convertDateStringToReadableFormat(updated_at: string) {
    const date = new Date(updated_at);
    const readableDate = date.toLocaleString();
    return readableDate;
  }
  return (
    <div className="review">
      <div className="review__header">
        <div className="review__header__author">
          <Avatar
            src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
          />
          <div className="review__header__author__meta">
            <div className="review__header__author__meta__name">
              {review.author}
            </div>
            <div className="review__header__author__meta__time">
              {convertDateStringToReadableFormat(review.updated_at)}
            </div>
          </div>
        </div>
      </div>
      <div className="review__content">{review.content}</div>
    </div>
  );
}
