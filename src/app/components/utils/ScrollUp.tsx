'use client';

// External libraries
import React, { useState, useEffect } from 'react';

// Icons
import { ArrowUpIcon } from '@heroicons/react/24/solid';

// Components
import CircleButton from '@/app/components/utils/Buttons/CircleButton';

// Styles
import styles from '@/app/styles/components/utils/scrollup.module.scss';

/*
  ScrollUpButton component (Client Component)
  - Displays a button that allows the user to scroll back to the top when scrolling down the page.
*/

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Function to handle scroll event and update visibility
  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  // Set up the scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only render the button if it is visible
  return (
    <div
      className={`${styles.scrollUp} ${isVisible ? styles.scrollUp__visible : ''}`}
    >
      <CircleButton icon={<ArrowUpIcon />} handleClick={scrollToTop} />
    </div>
  );
}
