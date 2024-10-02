'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

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
  const [error, setError] = React.useState(false);
  return (
    <Image
      src={!error ? src : altSrc} // Use the imported image directly
      className={imgClassName}
      alt={alt}
      onError={() => setError(true)}
      width={width}
      height={height}
      layout="responsive"
    />
  );
}
