// External libraries
import React from 'react';

// Styles
import styles from '@/app/styles/components/movies/actions/favorite.module.scss';
import btnStyles from '@/app/styles/components/utils/buttons.module.scss';

// Icons
import { CheckCircleIcon } from '@heroicons/react/24/solid';

/*
  LikeStatusButton component (Client Component: from parent)
  - Provides feedback for the like status with a button.
*/

export default function FavoriteButtonFeedback({
  isExpanded,
  isFavorite,
}: {
  isExpanded: boolean;
  isFavorite: boolean;
}) {
  const messsage = isFavorite ? 'Added' : 'Removed';
  const backgroundColor = isFavorite
    ? styles.favoriteBtnContainerGreen
    : styles.favoriteBtnContainerRed;
  return (
    <div
      className={`white-color ${backgroundColor} ${btnStyles.btn} ${styles.favoriteBtnContainer__success} ${isExpanded ? styles.favoriteBtnContainer__successExpanded : ''}`}
    >
      <p>{messsage}</p>
      <span>
        <CheckCircleIcon />
      </span>
    </div>
  );
}
