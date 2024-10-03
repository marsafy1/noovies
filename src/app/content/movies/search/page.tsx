'use client';

// External libraries
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Components
import MoviesContainer from '@/app/sections/moviesContainer/MoviesContainer';
import Loading from '@/app/components/feedback/Loading';

// Interfaces
import { Movie } from '@/app/interfaces/movies';

// Services
import { get } from '@/app/services/api/requests';

/*
  SearchResultsPage component (Client Component)
  - Displays search results for movies based on user input.
*/

export default function Search() {
  const searchParams = useSearchParams(); // Get the search parameters
  var searchQuery = searchParams.get('search_query'); // Extract the 'search_query' parameter
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  function getSafeQuery() {
    return searchQuery == null ? '' : searchQuery;
  }

  async function searchForMovie() {
    setLoading(true);
    try {
      searchQuery = getSafeQuery();
      let data = await get('search/movie', {
        query: encodeURIComponent(searchQuery),
      });
      setMovies(data['results']);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    searchForMovie();
  }, [searchQuery]);

  return (
    <>
      {!loading && (
        <MoviesContainer
          movies={movies}
          title="Search Results"
          subtitle={`"${getSafeQuery()}"`}
        />
      )}
      {loading && (
        <div className="h-100vh">
          <Loading />
        </div>
      )}
    </>
  );
}
