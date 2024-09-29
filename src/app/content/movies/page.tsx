'use client';
import React, { useState, useEffect } from 'react';
import { Movie } from '@/app/interfaces/movies';
import Link from 'next/link';

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
    <div>
      Movies
      {movies.map((movie: Movie, index: number) => {
        return (
          <div key={index}>
            {movie.title}
            <Link href={`/content/movies/${movie.id}`}>Details</Link>
          </div>
        );
      })}
      <button onClick={getMovies}>click</button>
    </div>
  );
}
