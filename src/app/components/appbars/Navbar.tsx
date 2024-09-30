import React from 'react';
import ThemeSwitch from '@/app/components/appbars/ThemeSwitch';
import Navtitle from './Navtitle';
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
        <Navtitle />
        <Search />
      </div>

      <div className="navbar__end">
        {/* <ThemeSwitch /> */}
        <div className="d-flex">
          {navItems.map((navItem, index) => {
            return (
              <NavItem key={index} name={navItem.name} href={navItem.href} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
