'use client';

// External libraries
import React, { MouseEventHandler, ReactElement } from 'react';

// Styles
import styles from '@/app/styles/components/utils/buttons.module.scss';

/*
  ViewSwitchButton component (Client Component)
  - A button to switch between different grid views.
*/

export default function ViewSwitchButton({
  title,
  handleClick,
  selected,
  icon,
}: {
  title: string;
  handleClick: MouseEventHandler;
  selected: boolean;
  icon: ReactElement;
}) {
  return (
    <div
      onClick={handleClick}
      className={`${styles.viewSwitchBtn} ${selected ? styles.viewSwitchBtnSelected : ''}`}
    >
      <span>{title}</span>
      <span className={styles.viewSwitchBtn__icon}>{icon}</span>
    </div>
  );
}
