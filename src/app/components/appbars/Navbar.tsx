import React from 'react';
import ThemeSwitch from '@/app/components/appbars/ThemeSwitch';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      name: 'Movies',
      href: '/content/movies',
    },
    {
      name: 'Movie Details',
      href: '/content/movies/movie-details',
    },
    {
      name: 'Favorites',
      href: '/content/favorites',
    },
  ];
  return (
    <div>
      Navbar
      <ThemeSwitch />
      <div>
        {navItems.map((navItem, index) => {
          return (
            <div key={index}>
              <Link href={navItem.href}>{navItem.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
