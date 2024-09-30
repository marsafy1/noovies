import React, { useEffect, useState } from 'react';
import PrimaryButton from '@/app/components/utils/Buttons/Button';

export default function Favorite({ movieId }: { movieId: number }) {
  const [isFavorite, setIsFavorite] = useState(false);

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
  };

  return (
    <div className="favorite-btn-container">
      {/* <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button> */}
      <PrimaryButton
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        handleClick={toggleFavorite}
        type={isFavorite ? 'secondary' : 'primary'}
      />
    </div>
  );
}
