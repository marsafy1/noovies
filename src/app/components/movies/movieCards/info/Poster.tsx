// External libraries
import React from 'react';

// Component imports
import SafeImage from '@/app/components/presentation/SafeImage';

// Asset imports
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';

export default function Poster({
  poster_path,
  size = 'w780',
}: {
  poster_path: string;
  size?: string;
}) {
  console.log(`https://image.tmdb.org/t/p/${size}${poster_path}`);
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
