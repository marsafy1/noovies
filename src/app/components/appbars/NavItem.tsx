'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use the next/navigation hook for App Router
import React from 'react';

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
    <div className="navbar__items-container">
      <Link
        className={`navbar__items-container__link ${
          isActive ? 'navbar__items-container__link-active' : ''
        }`}
        href={href}
      >
        {name}
      </Link>
    </div>
  );
}
