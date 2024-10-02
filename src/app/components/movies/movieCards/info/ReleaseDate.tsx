import React from 'react';

export default function ReleaseDate({
  releaseDate,
  fullDate = true,
}: {
  releaseDate: string;
  fullDate?: boolean;
}) {
  var displayedReleaseDate = releaseDate;
  if (!fullDate) {
    if (releaseDate) {
      displayedReleaseDate = releaseDate.split('-')[0];
    }
  }
  return <div>{displayedReleaseDate}</div>;
}
