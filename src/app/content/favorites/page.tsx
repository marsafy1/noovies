'use client';

// External libraries
import React, { useState, useEffect } from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Components
import MovieCard from '@/app/components/movies/movieCards/MovieCard';
import Empty from '@/app/components/feedback/Empty';
import Loading from '@/app/components/feedback/Loading';

// Sections
import FavoritesSection from '@/app/sections/FavoritesSection';

// Styles
import styles from '@/app/styles/content/favorites.module.scss';

// Services
import { get } from '@/app/services/api/requests';

/*
  FavoritesPage component (Client Component)
  - Displays the user's favorite movies with loading and empty states.
*/

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // Function to retrieve favorites from localStorage
  const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };

  async function getMovieDetails(movieId: number) {
    try {
      let data = await get(`movie/${movieId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // Load favorite movie IDs and fetch movie details
  useEffect(() => {
    const favorites = getFavorites();
    setFavoriteIds(favorites);

    // Fetch movie details for each favorite ID
    const fetchAllMovies = async () => {
      const moviePromises = favorites.map((id: number) => {
        if (id !== null) {
          return getMovieDetails(id);
        }
      });
      const movies = await Promise.all(moviePromises);
      setFavorites(movies);
      setLoading(false);
    };

    fetchAllMovies();
  }, []);

  return (
    <div className={styles.favorites}>
      <h1>Favorite Movies</h1>
      {loading ? (
        <div className="h-100-without-nav">
          <Loading />
        </div>
      ) : favorites.length > 0 ? (
        <FavoritesSection favorites={favorites} />
      ) : (
        <div className="h-100-without-nav">
          <Empty title="No Favorites yet!" />
        </div>
      )}
    </div>
  );
}
