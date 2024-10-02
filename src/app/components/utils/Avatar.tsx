'use client';

// External libraries
import React, { useState } from 'react';
import Image from 'next/image';

// Asset imports
import DefaultAvatar from '@/app/assets/defaults/avatar/default_avatar.png';

// Styles
import styles from '@/app/styles/components/utils/avatar.module.scss';

export default function Avatar({ src }: { src: string }) {
  const [error, setError] = useState(false);

  return (
    <div className={styles.avatar}>
      <Image
        className={styles.avatar__image}
        src={!error ? src : DefaultAvatar}
        alt="author avatar"
        width={40} // Specify width (required by next/image)
        height={40} // Specify height (required by next/image)
        onError={() => setError(true)}
      />
    </div>
  );
}
