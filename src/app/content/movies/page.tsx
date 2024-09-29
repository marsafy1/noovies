'use client';
import React, { useState, useEffect } from 'react';
import { Movie } from '@/app/interfaces/movies';
import MovieCard from '@/app/components/movies/MovieCard';

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  async function getMovies() {
    const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

    let res = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: { Authorization: `Bearer ${apiToken}` },
    });

    const data = await res.json();
    setCurrentPage(data['page']);
    setMovies(data['results']);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies">
      Movies
      <div className="movies__top-movies">
        <div>Top Movies</div>
        <div className="movies__top-movies__list">
          {movies.slice(0, 3).map((movie: Movie, index: number) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
      <div className="movies__normal-movies">
        <div>Normal Movies</div>
        <div className="movies__normal-movies__list">
          {movies.map((movie: Movie, index: number) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}
