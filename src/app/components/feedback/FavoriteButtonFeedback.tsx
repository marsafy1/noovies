// External imports
import React from 'react';

// Styles
import styles from '@/app/styles/components/movies/actions/favorite.module.scss';
import btnStyles from '@/app/styles/components/utils/buttons.module.scss';

// Import Icons
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function FavoriteButtonFeedback({
  isExpanded,
  isFavorite,
}: {
  isExpanded: boolean;
  isFavorite: boolean;
}) {
  // const messsage = isFavorite ? 'Added to favorites' : 'Removed from favorites';
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
