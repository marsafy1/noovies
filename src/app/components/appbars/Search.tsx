'use client';
import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState<string>('');

  function handleSearch() {
    // content/movies?search_query=ahmed
    router.push(`/content/movies?search_query=${query}`);
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(); // Trigger the search when Enter is pressed
    }
  };

  return (
    <div className="navbar__start__search">
      <input
        className="navbar__start__search__input-field"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        onKeyDown={handleKeyDown} // Detect when the Enter key is pressed
      />
    </div>
  );
}
