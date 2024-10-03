'use clinet';
// External libraries
import React, { useEffect, useState } from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import MovieListRow from '@/app/components/movies/MovieListRow';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

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
        scrollContainer.scrollBy({ left: 2, behavior: 'smooth' }); // Scroll 2 pixels at a time
      }
    }, 20); // Adjust the interval for speed (smaller means faster)

    return () => clearInterval(scrollInterval); // Clean up on unmount
  }, []);

  return (
    <div className={styles.movies__normalMovies}>
      <div className={styles.movies__normalMovies__subtitle}>
        <h3>{title}</h3>
      </div>
      <MovieListRow movies={movies} />
    </div>
  );
}
