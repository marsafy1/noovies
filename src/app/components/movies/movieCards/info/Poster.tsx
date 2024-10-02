import React from 'react';
import SafeImage from '@/app/components/presentation/SafeImage';
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';

export default function Poster({ poster_path }: { poster_path: string }) {
  return (
    <SafeImage
      src={'https://image.tmdb.org/t/p/w780/' + poster_path}
      altSrc={PosterPlaceholder}
      alt="Movie Image"
      width={250}
      height={350}
    />
  );
}
