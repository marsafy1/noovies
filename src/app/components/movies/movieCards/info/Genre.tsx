// External imports
import React from 'react';

// Interfaces imports
import { MovieGenre } from '@/app/interfaces/movies';

// Styles imports
import styles from '@/app/styles/components/movies/info/info.module.scss';

export default function Genre({ genre }: { genre: MovieGenre }) {
  return (
    <div>
      <div className={`movie-info-color ${styles.genre}`} key={genre.id}>
        {genre.name}
      </div>
    </div>
  );
}
