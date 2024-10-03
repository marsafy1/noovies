// External libraries
import React from 'react';

// Styles
import styles from '@/app/styles/components/utils/tooltip.module.scss';

/*
  Tooltip component
  - Displays a tooltip with additional information when hovering over or focusing on an element.
*/

export default function Tooltip({ text }: { text: string }) {
  return <div className={styles.tooltip}>{text}</div>;
}
