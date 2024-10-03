import React from 'react';

export default function ReleaseDate({
  releaseDate,
  fullDate = true,
}: {
  releaseDate: string;
  fullDate?: boolean;
}) {
  if (!fullDate) {
    if (releaseDate) {
      return releaseDate.split('-')[0];
    }
  }
  return (
    <div className="movie-info-color">{releaseDate.replaceAll('-', '/')}</div>
  );
}
