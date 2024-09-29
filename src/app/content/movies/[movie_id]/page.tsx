import React from 'react';
import { MovieIDParams } from '@/app/interfaces/movies';
export default function page({ params }: { params: MovieIDParams }) {
  return <div>page {params.movie_id}</div>;
}
