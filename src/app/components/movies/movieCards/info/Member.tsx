'use client';

// External libraries
import React from 'react';

// Enum imports
import { memberTypes } from '@/app/enums/memberType';

// Interface imports
import { CrewMember, CastMember } from '@/app/interfaces/members';

// Component imports
import Avatar from '@/app/components/utils/Avatar';

// Styles
import styles from '@/app/styles/components/movieDetails/movieMembers.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default function Member({
  member,
}: {
  member: CrewMember | CastMember;
}) {
  function handleClick() {
    let memberURL = `https://www.themoviedb.org/person/${member.id}`;
    window.open(memberURL, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className={styles.member__list__item} onClick={handleClick}>
      <Avatar src={`https://image.tmdb.org/t/p/w92${member.profile_path}`} />
      <span>
        <strong>{member.original_name}</strong>
        <small>{(member as CastMember).character}</small>
      </span>
    </div>
  );
}
