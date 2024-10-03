'use client';

// External libraries
import React, { MouseEventHandler, ReactElement } from 'react';

// Styles
import styles from '@/app/styles/components/utils/buttons.module.scss';

/*
  CircleButton component (Client Component)
  - A button with a circular design, used for various actions.
*/

export default function CircleButton({
  icon,
  handleClick,
}: {
  icon: ReactElement;
  handleClick: MouseEventHandler;
}) {
  return (
    <div className={styles.circleBtn} onClick={handleClick}>
      {icon}
    </div>
  );
}
