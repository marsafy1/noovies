'use client';

// External libraries
import React from 'react';
import Image, { StaticImageData } from 'next/image';

/*
  SafeImage component (Client Component)
  - Displays an image safely using Next.js's Image component with optimized loading.
*/

export default function SafeImage({
  src,
  altSrc,
  alt,
  imgClassName,
  width = 16,
  height = 9,
}: {
  src: string;
  altSrc: StaticImageData;
  alt: string;
  imgClassName?: string;
  height?: number;
  width?: number;
}) {
  const [error, setError] = React.useState(src.includes('null'));
  return (
    <Image
      src={!error ? src : altSrc} // Use the src image directly
      className={imgClassName}
      alt={alt}
      onError={() => setError(true)}
      width={width}
      height={height}
      layout="responsive"
      loading="lazy"
    />
  );
}
