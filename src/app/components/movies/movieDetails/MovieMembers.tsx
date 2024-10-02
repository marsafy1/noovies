import React, { useState, useEffect } from 'react';
import { CrewMember, CastMember } from '@/app/interfaces/movies';
import styles from '@/app/styles/components/movieDetails/movieMembers.module.scss';

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
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  async function getMovieCredits() {
    let movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    let res = await fetch(movieCreditsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let members: Member[] = [];
    let result = await res.json();
    if (castType == 'directors') {
      let crew = result.crew;
      crew.forEach((crewMember: CrewMember) => {
        if (crewMember['job'] == 'Director') {
          members.push(crewMember);
        }
      });
    } else if (castType == 'cast') {
      members = result.cast;
      members = members
        .sort((a: Member, b: Member) => b.popularity - a.popularity)
        .slice(0, 5); // Get the 10 most popular from the cast
    }
    setMembers(members);
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
