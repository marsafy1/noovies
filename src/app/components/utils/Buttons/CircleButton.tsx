'use client';
// External libraries
import React, { MouseEventHandler, ReactElement } from 'react';

// Styles
import styles from '@/app/styles/components/utils/buttons.module.scss';

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
