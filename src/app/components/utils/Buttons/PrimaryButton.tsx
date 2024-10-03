'use client';

// External libraries
import React, { MouseEventHandler, ReactElement } from 'react';

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
  icon,
}: {
  title: string;
  handleClick: MouseEventHandler;
  type?: string;
  icon?: ReactElement;
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
      {icon && <span className={styles.btn__icon}>{icon}</span>}
    </div>
  );
}
