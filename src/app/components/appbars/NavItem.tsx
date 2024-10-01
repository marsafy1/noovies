'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use the next/navigation hook for App Router
import React from 'react';
import styles from '@/app/styles/components/appbars/navbar.module.scss';

export default function NavItem({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
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
