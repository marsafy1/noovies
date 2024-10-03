// External libraries
import React from 'react';

// Component imports
import ThemeSwitch from '@/app/components/appbars/ThemeSwitch';
import Navtitle from '@/app/components/appbars/Navtitle';
import NavItem from '@/app/components/appbars/NavItem';
import Search from '@/app/components/appbars/Search';

// Styles
import styles from '@/app/styles/components/appbars/navbar.module.scss';

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
    // {
    //   name: 'Movie Details',
    //   href: '/content/movies/12',
    // },
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
