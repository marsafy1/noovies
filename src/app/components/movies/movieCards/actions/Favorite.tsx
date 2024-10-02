'use client';

// External libraries
import React, { useEffect, useState } from 'react';

// Component imports
import PrimaryButton from '@/app/components/utils/Buttons/PrimaryButton';
import FavoriteButtonFeedback from '@/app/components/feedback/FavoriteButtonFeedback';

// Styles
import styles from '@/app/styles/components/movies/actions/favorite.module.scss';
import btnStyles from '@/app/styles/components/utils/buttons.module.scss';

export default function Favorite({ movieId }: { movieId: number }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Utility function to get favorites from localStorage
  const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };

  // Check if the movie is already in the favorites list on component mount
  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsExpanded(true);
    const favorites = getFavorites();

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((id: number) => id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(movieId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }

    setTimeout(() => {
      setIsExpanded(false);
    }, 3000);
  };

  return (
    <div className={styles.favoriteBtnContainer}>
      {/* <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button> */}

      <FavoriteButtonFeedback
        isExpanded={isExpanded && !isFavorite}
        isFavorite={isFavorite}
      />
      <div
        className={`${styles.favoriteBtnContainer__btn} ${isFavorite ? styles.favoriteBtnContainer__btnRight : styles.favoriteBtnContainer__btnLeft} ${isExpanded ? styles.favoriteBtnContainer__btnCollapsed : ''}`}
      >
        <PrimaryButton
          title={isFavorite ? 'Liked' : 'Like'}
          handleClick={toggleFavorite}
          type={isFavorite ? 'primary' : 'secondary'}
        />
      </div>
      <FavoriteButtonFeedback
        isExpanded={isExpanded && isFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
