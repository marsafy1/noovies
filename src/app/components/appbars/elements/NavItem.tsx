'use client';

// External libraries
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Interfaces
import { NavItemElem } from '@/app/interfaces/navItem';

// Styles
import styles from '@/app/styles/components/appbars/navbar.module.scss';

/*
  NavItem component for the Navbar (Client Component)
  - Uses `usePathname` from `next/navigation` for active link detection in Next.js 13+ App Router.
*/

export default function NavItem({ name, href }: NavItemElem) {
  const pathname = usePathname(); // Get the current path

  // Check if the current path matches the href
  const isActive = pathname === href;
  return (
    <div className={styles.navbar__itemsContainer}>
      <Link
        className={`${styles.navbar__itemsContainer__link} ${
          isActive ? styles.navbar__itemsContainer__linkActive : ''
        }`}
        href={href}
      >
        {name}
      </Link>
    </div>
  );
}
