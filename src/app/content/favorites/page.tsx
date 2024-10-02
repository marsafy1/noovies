'use client';

// External libraries
import React, { useState, useEffect } from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import MovieCard from '@/app/components/movies/MovieCard';
import Empty from '@/app/components/feedback/Empty';

// Styles
import moviesStyles from '@/app/styles/content/movies.module.scss';
import styles from '@/app/styles/content/favorites.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);

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
      console.log(error);
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
    };

    fetchAllMovies();
  }, []);

  return (
    <div className={styles.favorites}>
      <h1>Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className={moviesStyles.movies__normalMovies__list}>
          {favorites.map((movie: Movie, index: number) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="h-100-without-nav">
          <Empty title="No Favorites yet!" />
        </div>
      )}
    </div>
  );
}
