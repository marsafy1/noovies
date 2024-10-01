'use client';
import React, { use, useState } from 'react';
import styles from '@/app/styles/components/appbars/navbar.module.scss';
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
    <div className={styles.navbar__start__search}>
      <input
        className={styles.navbar__start__search__inputField}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        onKeyDown={handleKeyDown} // Detect when the Enter key is pressed
      />
    </div>
  );
}
