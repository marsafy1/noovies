'use client';

// External libraries
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Icons
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

// Components
import CircleButton from '@/app/components/utils/Buttons/CircleButton';

// Styles
import styles from '@/app/styles/components/appbars/navbar.module.scss';

/*
  SearchBar component for the Navbar (Client Component)
  - Provides a search functionality within the navbar.
*/

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState<string>('');

  function handleSearch() {
    // content/movies?search_query=ahmed
    router.push(`/content/movies/search?search_query=${query}`);
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(); // Trigger the search when Enter is pressed
    }
  };

  return (
    <div className={styles.navbar__start__search}>
      <input
        className={styles.navbar__start__search__inputField}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        onKeyDown={handleKeyDown} // Detect when the Enter key is pressed
      />
      <div className={styles.navbar__start__search__icon}>
        <CircleButton
          icon={<MagnifyingGlassIcon />}
          handleClick={handleSearch}
        />
      </div>
    </div>
  );
}
