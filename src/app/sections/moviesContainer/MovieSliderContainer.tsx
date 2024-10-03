'use client';

// External libraries
import React, { useEffect, useState } from 'react';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Components
import MovieListRow from '@/app/components/movies/movieLists/MovieListRow';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

// Services
import { get } from '@/app/services/api/requests';

/*
  MovieHorizontalContainer component (Client Component)
  - Displays a horizontal row of movies.
*/

export default function MovieSlider({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function getTopMovies() {
    setLoading(true);
    try {
      let data = await get(path);
      let movies = data['results'];
      setMovies(movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTopMovies();
    const scrollContainer = document.querySelector('.movieSlider__list');

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({ left: 2, behavior: 'smooth' }); // 2 pixels at a time
      }
    }, 20); // settting the scroll speed

    return () => clearInterval(scrollInterval); // Clean up on unmount
  }, []);

  return (
    <div className={styles.movies__normalMovies}>
      <div className={styles.movies__normalMovies__subtitle}>
        <h3>{title}</h3>
      </div>
      <MovieListRow movies={movies} loading={loading} />
    </div>
  );
}
