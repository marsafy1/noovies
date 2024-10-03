// External libraries
import React from 'react';

// Components
import SafeImage from '@/app/components/presentation/SafeImage';

// Assets
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';

/*
  MoviePoster component
  - Displays the poster of the movie within a movie card.
*/

export default function Poster({
  poster_path,
  size = 'w780',
}: {
  poster_path: string;
  size?: string;
}) {
  return (
    <SafeImage
      src={`https://image.tmdb.org/t/p/${size}${poster_path}`}
      altSrc={PosterPlaceholder}
      alt="Poster Image"
      width={2}
      height={3}
    />
  );
}
