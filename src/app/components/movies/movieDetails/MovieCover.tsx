// External libraries
import React, { useState } from 'react';

// Interface imports
import { DetailedMovie } from '@/app/interfaces/movies';

// Asset imports
import BackdropPlaceholder from '@/app/assets/defaults/movies/backdrop-placeholder.png';

// Component imports
import SafeImage from '@/app/components/presentation/SafeImage';

// Styles
import styles from '@/app/styles/components/movieDetails/movieCover.module.scss';

export default function MovieCover({
  movieDetails,
}: {
  movieDetails: DetailedMovie;
}) {
  return (
    <div className={styles.movieCover}>
      <div className={styles.movieCover__gradient}></div>
      <SafeImage
        src={
          'https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path
        }
        altSrc={BackdropPlaceholder}
        alt="Movie Image"
      />
    </div>
  );
}
