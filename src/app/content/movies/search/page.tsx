'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import MoviesContainer from '@/app/components/movies/MoviesContainer';
import { Movie } from '@/app/interfaces/movies';

export default function Search() {
  const searchParams = useSearchParams(); // Get the search parameters
  var searchQuery = searchParams.get('search_query'); // Extract the 'search_query' parameter
  const [movies, setMovies] = useState<Movie[]>([]);

  function getSafeQuery() {
    return searchQuery == null ? '' : searchQuery;
  }

  async function searchForMovie() {
    const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
    searchQuery = getSafeQuery();
    let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}`;
    let res = await fetch(searchUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });

    const data = await res.json();
    setMovies(data['results']);
  }

  useEffect(() => {
    searchForMovie();
  }, [searchQuery]);

  return (
    <div className="h-100vh">
      <MoviesContainer
        movies={movies}
        title="Search Results"
        subtitle={`"${getSafeQuery()}"`}
      />
    </div>
  );
}
