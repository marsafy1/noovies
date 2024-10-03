// External libraries
import React, { useState } from 'react';

// Interfaces
import { DetailedMovie } from '@/app/interfaces/movies';

// Assets
import BackdropPlaceholder from '@/app/assets/defaults/movies/backdrop-placeholder.png';

// Components
import SafeImage from '@/app/components/presentation/SafeImage';

// Styles
import styles from '@/app/styles/sections/movieDetails/movieCover.module.scss';

/*
  MovieCoverSection component
  - Displays the movie cover along with crucial information.
*/

export default function MovieCoverSection({
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
