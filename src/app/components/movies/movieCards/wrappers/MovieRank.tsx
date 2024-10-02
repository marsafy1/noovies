import React from 'react';

export default function MovieRank({ child }: { child: React.ReactElement }) {
  return (
    <div>
      <div>#1</div>
      <div>{child}</div>
    </div>
  );
}
