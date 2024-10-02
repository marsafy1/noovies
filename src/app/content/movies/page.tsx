import React from 'react';
import { Movie } from '@/app/interfaces/movies';
import TopMovieCard from '@/app/components/movies/TopMovieCard';
import TopSideMovieCard from '@/app/components/movies/TopSideMovieCard';
import styles from '@/app/styles/content/movies.module.scss';
import MoviesContainer from '@/app/components/movies/MoviesContainer';
import { get } from '@/app/services/api/requests';

export default async function Movies() {
  var movies: Movie[] = await getTopMovies();

  async function getTopMovies() {
    try {
      let data = await get('trending/movie/week');
      let movies = data['results'];
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

      <MoviesContainer movies={movies} title="Trending movies" />
    </div>
  );
}
