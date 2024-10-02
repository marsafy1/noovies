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
      releaseDate.split('-')[0];
    }
  }
  return <div>{releaseDate.replaceAll('-', '/')}</div>;
}
