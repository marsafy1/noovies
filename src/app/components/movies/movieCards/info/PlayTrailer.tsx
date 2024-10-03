'use client';

// External libraries
import React, { useState } from 'react';

// Components
import Tooltip from '@/app/components/utils/Tooltip';

// Icons
import { PlayIcon } from '@heroicons/react/24/solid';

// Interfaces
import { DetailedMovie } from '@/app/interfaces/movies';

// Styles
import styles from '@/app/styles/components/movies/info/info.module.scss';

/*
  PlayTrailerButton component (Client Component)
  - Button to play the movie trailer in a new page.
*/

export default function PlayTrailer({ trailerKey }: { trailerKey: string }) {
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
