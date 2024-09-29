import React from 'react';

export default function Adult({ adult }: { adult: boolean }) {
  return <div>{adult ? '18+' : 'Safe'}</div>;
}
