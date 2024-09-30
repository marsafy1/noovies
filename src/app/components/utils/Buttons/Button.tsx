import React, { MouseEventHandler } from 'react';

export default function PrimaryButton({
  title,
  handleClick,
  type,
}: {
  title: string;
  handleClick: MouseEventHandler;
  type?: string;
}) {
  let btnTypeClassName = 'primary-btn';
  if (type === 'secondary') {
    btnTypeClassName = 'secondary-btn';
  }
  return (
    <div className={`btn ${btnTypeClassName}`} onClick={handleClick}>
      {title}
    </div>
  );
}
