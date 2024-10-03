// External libraries
import React, { useState } from 'react';

// Asset imports
import DefaultAvatar from '@/app/assets/defaults/avatar/default_avatar.png';

// Copmonents Import
import SafeImage from '@/app/components/presentation/SafeImage';

// Styles
import styles from '@/app/styles/components/utils/avatar.module.scss';

export default function Avatar({ src }: { src: string }) {
  return (
    <div className={styles.avatar}>
      <SafeImage
        imgClassName={styles.avatar__image}
        src={src}
        altSrc={DefaultAvatar}
        alt="author avatar"
        width={40}
        height={40}
      />
    </div>
  );
}
