// External Imports
import React from 'react';

// Import styles
import styles from '@/app/styles/components/utils/tooltip.module.scss';

export default function Tooltip({ text }: { text: string }) {
  return <div className={styles.tooltip}>{text}</div>;
}
