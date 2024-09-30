'use client';
import React, { useState, useEffect } from 'react';
import { Movie } from '@/app/interfaces/movies';
import MovieCard from '@/app/components/movies/MovieCard';

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Function to retrieve favorites from localStorage
  const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };

  async function getMovieDetails(movieId: number) {
    const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
    let movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
    console.log(movieDetailsUrl);
    let res = await fetch(movieDetailsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();
    console.log(result);
    return result;
    // let updatedFavorites = favorites;
    // updatedFavorites.push(result);
    // setFavorites(updatedFavorites);
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
      console.log(movies);
      setFavorites(movies);
    };

    fetchAllMovies();
  }, []);

  return (
    <div className="favorites">
      <h1>Favorite Movies</h1>
      <div className="movies__normal-movies__list">
        {favorites.length > 0 ? (
          favorites.map((movie: Movie, index: number) => {
            return <MovieCard key={index} movie={movie} />;
          })
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
}
