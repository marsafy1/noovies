import Link from 'next/link';
import React from 'react';

export default function NavItem({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <div className="navbar__items__item">
      <Link href={href}>{name}</Link>
    </div>
  );
}
