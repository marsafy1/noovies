'use client';
import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

export default function SafeImage({
  src,
  altSrc,
  alt,
  imgClassName,
  height,
  width,
}: {
  src: string;
  altSrc: StaticImageData;
  alt: string;
  imgClassName?: string;
  height: number;
  width: number;
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
    />
  );
}
