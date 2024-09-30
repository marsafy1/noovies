'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Movie } from '@/app/interfaces/movies';
import MovieCard from '@/app/components/movies/MovieCard';
import TopMovieCard from '@/app/components/movies/TopMovieCard';
import TopSideMovieCard from '@/app/components/movies/TopSideMovieCard';

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchParams = useSearchParams(); // Get the search parameters
  const searchQuery = searchParams.get('search_query'); // Extract the 'search_query' parameter

  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  async function getTopMovies() {
    let res = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: { Authorization: `Bearer ${apiToken}` },
    });

    const data = await res.json();
    setCurrentPage(data['page']);
    setMovies(data['results']);
  }

  async function searchForMovie(movie_query: string) {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie_query)}`;
    console.log(searchUrl);
    let res = await fetch(searchUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });

    const data = await res.json();

    setCurrentPage(data['page']);
    setMovies(data['results']);
  }

  useEffect(() => {
    console.log('Search ' + searchQuery);
    if (searchQuery?.length === 0 || searchQuery === null) {
      getTopMovies();
    } else if (searchQuery !== null) {
      searchForMovie(searchQuery);
    }
  }, [searchParams]);

  return (
    <div className="movies">
      Movies
      <p>Search Query: {searchQuery}</p>
      {(searchQuery?.length === 0 || searchQuery === null) && (
        <div className="movies__top-movies">
          <div>Top Movies</div>
          <div className="movies__top-movies__list">
            <div>
              {movies.slice(0, 1).map((movie: Movie, index: number) => {
                return <TopMovieCard key={index} movie={movie} />;
              })}
            </div>
            <div className="movies__top-movies__list__top-side-movies">
              <div>Top 5</div>
              <div className="movies__top-movies__list__top-side-movies__list">
                {movies.slice(0, 4).map((movie: Movie, index: number) => {
                  return <TopSideMovieCard key={index} movie={movie} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
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
