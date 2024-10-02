// External libraries
import React, { useState, useEffect } from 'react';

// Interface imports
import { CrewMember, CastMember } from '@/app/interfaces/members';

// Styles
import styles from '@/app/styles/components/movieDetails/movieMembers.module.scss';

// Service imports
import { get } from '@/app/services/api/requests';

export default function MovieMembers({
  movieId,
  castType,
}: {
  movieId: number;
  castType: 'directors' | 'cast';
}) {
  const title = castType == 'directors' ? 'Directors' : 'Cast';
  type Member = CrewMember | CastMember;

  const [members, setMembers] = useState<Member[]>([]);

  function handleDirectorsPopulation(crew: CrewMember[]): CrewMember[] {
    let directors: CrewMember[] = [];
    crew.forEach((crewMember: CrewMember) => {
      if (crewMember['job'] == 'Director') {
        directors.push(crewMember);
      }
    });
    return directors;
  }

  function handleCastPopulation(cast: CastMember[]): CastMember[] {
    cast = cast
      .sort((a: Member, b: Member) => b.popularity - a.popularity)
      .slice(0, 5); // Get the 5 most popular from the cast
    return cast;
  }

  async function getMovieCredits() {
    try {
      let data = await get(`movie/${movieId}/credits`);
      let members: Member[] = [];

      if (castType == 'directors') {
        members = handleDirectorsPopulation(data.crew);
      } else if (castType == 'cast') {
        members = handleCastPopulation(data.cast);
      }
      setMembers(members);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovieCredits();
  }, []);

  return (
    <div className={styles.cast}>
      <div className={styles.cast__title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.cast__list}>
        {members.map((member: Member) => {
          return (
            <div key={member.id}>
              {member.original_name}
              {/* {' as '}
              <b>
                {castType === 'cast' ? (member as CastMember).character : ''}
              </b> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
