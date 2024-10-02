'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import MoviesContainer from '@/app/components/movies/MoviesContainer';
import { Movie } from '@/app/interfaces/movies';
import { get } from '@/app/services/api/requests';

export default function Search() {
  const searchParams = useSearchParams(); // Get the search parameters
  var searchQuery = searchParams.get('search_query'); // Extract the 'search_query' parameter
  const [movies, setMovies] = useState<Movie[]>([]);

  function getSafeQuery() {
    return searchQuery == null ? '' : searchQuery;
  }

  async function searchForMovie() {
    try {
      searchQuery = getSafeQuery();
      let data = await get('search/movie', {
        query: encodeURIComponent(searchQuery),
      });

      setMovies(data['results']);
    } catch (error) {
      console.log(error);
    }
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
