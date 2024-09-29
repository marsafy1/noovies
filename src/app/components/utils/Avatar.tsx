import React, { useState } from 'react';
import Image from 'next/image';
import DefaultAvatar from '@/app/assets/avatar/default_avatar.png';

export default function Avatar({ src }: { src: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="avatar">
      <Image
        className="avatar__image"
        src={!error ? src : DefaultAvatar}
        alt="author avatar"
        width={40} // Specify width (required by next/image)
        height={40} // Specify height (required by next/image)
        onError={() => setError(true)}
      />
    </div>
  );
}
