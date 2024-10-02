import React from 'react';

export default function Runtime({ runtime }: { runtime: number | undefined }) {
  return <div>{runtime === undefined ? '' : `${runtime} mins`}</div>;
}
