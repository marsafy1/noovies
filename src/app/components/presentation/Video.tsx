// External libraries
import React from 'react';

/*
  VideoDisplay component
  - Displays a video player for media content.
*/

export default function Video({
  src,
  width = '600px',
  height = '400px',
}: {
  src: string;
  width?: string;
  height?: string;
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      aria-hidden="true"
      allowFullScreen
    ></iframe>
  );
}
