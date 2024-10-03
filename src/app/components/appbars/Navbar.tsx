// External libraries
import React from 'react';

// Components
import ThemeSwitch from '@/app/components/appbars/elements/ThemeSwitch';
import Navtitle from '@/app/components/appbars/elements/Navtitle';
import NavItem from '@/app/components/appbars/elements/NavItem';
import Search from '@/app/components/appbars/elements/Search';

// Interfaces
import { NavItemElem } from '@/app/interfaces/navItem';

// Styles
import styles from '@/app/styles/components/appbars/navbar.module.scss';

/*
  Navbar component (Client Component)
  - The main navigation bar component that includes navigation items, search, and theme switching functionality.
*/

export default function Navbar() {
  const navItems: NavItemElem[] = [
    {
      name: 'Movies',
      href: '/',
    },
    {
      name: 'Favorites',
      href: '/content/favorites',
    },
  ];
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__start}>
        <Navtitle />
        <Search />
      </div>

      <div className={styles.navbar__end}>
        <div className="d-flex">
          {navItems.map((navItem, index) => {
            return (
              <NavItem key={index} name={navItem.name} href={navItem.href} />
            );
          })}
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
