'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Movie } from '@/app/interfaces/movies';
import MovieCard from '@/app/components/movies/MovieCard';
import TopMovieCard from '@/app/components/movies/TopMovieCard';
import TopSideMovieCard from '@/app/components/movies/TopSideMovieCard';
import styles from '@/app/styles/content/movies.module.scss';

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  const searchParams = useSearchParams(); // Get the search parameters
  const searchQuery = searchParams.get('search_query'); // Extract the 'search_query' parameter

  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  async function getTopMovies() {
    let res = await fetch('https://api.themoviedb.org/3/trending/movie/week', {
      headers: { Authorization: `Bearer ${apiToken}` },
    });

    const data = await res.json();
    console.log(data);
    setCurrentPage(data['page']);
    setMovies(data['results']);
  }

  async function searchForMovie(movie_query: string) {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie_query)}`;
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
      setIsSearch(false);
      getTopMovies();
    } else if (searchQuery !== null) {
      setIsSearch(true);
      searchForMovie(searchQuery);
    }
  }, [searchParams]);

  return (
    <div className={styles.movies}>
      {!isSearch && (
        <div className={styles.movies__topMovies}>
          <div className={styles.movies__topMovies__subtitle}>
            <h3>Movies on Fire 🔥</h3>
          </div>
          <div className={styles.movies__topMovies__list}>
            <div>
              {movies.slice(0, 1).map((movie: Movie, index: number) => {
                return <TopMovieCard key={index} movie={movie} />;
              })}
            </div>
            <div className={styles.movies__topMovies__list__topSideMovies}>
              <div
                className={styles.movies__topMovies__list__topSideMovies__list}
              >
                {movies.slice(0, 5).map((movie: Movie, index: number) => {
                  return <TopSideMovieCard key={index} movie={movie} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.movies__normalMovies}>
        <div className={styles.movies__normalMovies__subtitle}>
          <h3>{isSearch ? 'Search Results' : 'Trending Movies'}</h3>
        </div>

        <div className={styles.movies__normalMovies__list}>
          {movies.map((movie: Movie, index: number) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}
