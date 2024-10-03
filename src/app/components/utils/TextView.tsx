// External libraries
import React, { useState } from 'react';

// Styles
import styles from '@/app/styles/components/utils/textView.module.scss';

/*
  TextView component
  - Truncates text and shows a "Read More" option for text longer than the specified maximum length.
*/

export default function TextView({
  text,
  maxLength = 100,
}: {
  text: string;
  maxLength?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the full content is shown
  function toggleReadMore() {
    setIsExpanded(!isExpanded); // Toggle between showing full or truncated content
  }
  // Truncate the content to maxLength characters
  const truncatedContent =
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  return (
    <div className={styles.textView}>
      {isExpanded ? text : truncatedContent}
      {text.length > maxLength && (
        <span onClick={toggleReadMore} className={styles.textView__readMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      )}
    </div>
  );
}
