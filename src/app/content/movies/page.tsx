// External libraries
import React from 'react';

// Interface imports
import { Movie } from '@/app/interfaces/movies';

// Component imports
import MoviesContainer from '@/app/sections/moviesContainer/MoviesContainer';
import MovieSlider from '@/app/sections/moviesContainer/MovieSliderContainer';
import Loading from '@/app/components/feedback/Loading';
import TrendingPlayshowSection from '@/app/sections/TrendingPlayshowSection';
import MoviesDisplaySection from '@/app/sections/MoviesDisplaySection';

// Styles
import styles from '@/app/styles/content/movies.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default async function Movies() {
  var loading = true;
  var movies: Movie[] = await getTopMovies();

  async function getTopMovies() {
    try {
      let data = await get('trending/movie/week');
      let movies = data['results'];
      loading = false;
      return movies;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.movies}>
      <div className={styles.movies__topMovies}>
        <div className={styles.movies__topMovies__subtitle}>
          <h3>Movies on Fire 🔥</h3>
        </div>
        {!loading && (
          <TrendingPlayshowSection trendingMovies={movies.slice(0, 5)} />
        )}
        {loading && <Loading />}
      </div>

      <MoviesDisplaySection movies={movies} />
    </div>
  );
}
