'use client';

// External Imports
import React, { useState } from 'react';

// Import Components
import Tooltip from '@/app/components/utils/Tooltip';

// Import Icons
import { PlayIcon } from '@heroicons/react/24/solid';

// Import Interfaces
import { DetailedMovie } from '@/app/interfaces/movies';

// Import Styles
import styles from '@/app/styles/components/movies/info/info.module.scss';

export default function PlayTrailer({ trailerKey }: { trailerKey: number }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);
  function handleClick() {
    let trailerURL = `https://www.youtube.com/watch?v=${trailerKey}`;
    window.open(trailerURL, '_blank', 'noopener,noreferrer');
  }
  if (trailerKey) {
    return (
      <div
        className={styles.playTrailer}
        onMouseEnter={() => setIsTooltipVisible(true)}
        // onMouseLeave={() => setIsTooltipVisible(false)}
        onClick={handleClick}
      >
        <div className={styles.playTrailer__icon}>
          <PlayIcon />
        </div>
        {true && <Tooltip text="Play Trailer" />}
      </div>
    );
  } else {
    return <></>;
  }
}
