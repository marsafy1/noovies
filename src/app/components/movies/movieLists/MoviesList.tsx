// External libraries
import React, { useState, useEffect } from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Components
import MovieCard from '@/app/components/movies/movieCards/MovieCard';
import Empty from '@/app/components/feedback/Empty';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

// Services
import { get } from '@/app/services/api/requests';

/*
  MoviesList component
  - Displays a list of movies vertically.
*/

export default function MoviesList({
  initialMovies,
}: {
  initialMovies: Movie[];
}) {
  const MAX_PAGES = 10;
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [page, setPage] = useState<number>(1);

  async function getMoreMovies(page: number) {
    try {
      let data = await get(`trending/movie/week?page=${page}`);
      let newMovies = data['results'];

      setMovies([...movies, ...newMovies]); // Append new movies to the existing list
    } catch (error) {
      console.error('Error fetching more movies:', error);
    }
  }

  function isEmptyMovies() {
    return !movies || movies.length === 0;
  }

  // Scroll handler to fetch more movies when reaching the bottom
  function handleScroll() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const windowScroll = document.documentElement.scrollTop;

    const scrolled = (windowScroll / height) * 100;

    if (page < MAX_PAGES) {
      if (scrolled >= 100) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      getMoreMovies(page);
    }
  }, [page]);

  return (
    <div className={styles.movies__normalMovies__list}>
      {!isEmptyMovies() &&
        movies.map((movie: Movie, index: number) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      {isEmptyMovies() && (
        <div className="h-100-without-nav">
          <Empty title="Nothing found" />
        </div>
      )}
    </div>
  );
}
