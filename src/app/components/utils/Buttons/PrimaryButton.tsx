'use client';

// External libraries
import React, { MouseEventHandler } from 'react';

// Styles
import styles from '@/app/styles/components/utils/buttons.module.scss';

/*
  PrimaryButton component (Client Component)
  - A button styled with primary button design, used for main actions.
*/

export default function PrimaryButton({
  title,
  handleClick,
  type,
}: {
  title: string;
  handleClick: MouseEventHandler;
  type?: string;
}) {
  let btnTypeClassName = 'primaryBtn';
  if (type === 'secondary') {
    btnTypeClassName = 'secondaryBtn';
  }
  return (
    <div
      className={`${styles.btn} ${styles[btnTypeClassName]}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </div>
  );
}
