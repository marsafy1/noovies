import React from 'react';
import ThemeSwitch from '@/app/components/appbars/ThemeSwitch';
import NavItem from './NavItem';
import Search from './Search';
interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      name: 'Movies',
      href: '/',
    },
    {
      name: 'Movie Details',
      href: '/content/movies/12',
    },
    {
      name: 'Favorites',
      href: '/content/favorites',
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__start">
        <div className="navbar__start__title">Navbar</div>
        <Search />
        <div className="navbar__items">
          {navItems.map((navItem, index) => {
            return (
              <NavItem key={index} name={navItem.name} href={navItem.href} />
            );
          })}
        </div>
      </div>

      <div className="navbar__end">
        <ThemeSwitch />
      </div>
    </div>
  );
}
