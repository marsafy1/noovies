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

export default async function MovieMembers({
  movieId,
  castType,
}: {
  movieId: number;
  castType: memberTypes;
}) {
  const title = castType == memberTypes.directors ? 'Directors' : 'Cast';
  type Member = CrewMember | CastMember;

  var members: Member[] = await getMovieCredits();

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
    let members: Member[] = [];
    try {
      let data = await get(`movie/${movieId}/credits`);
      console.log(data);
      if (castType == memberTypes.directors) {
        members = handleDirectorsPopulation(data.crew);
      } else if (castType == memberTypes.cast) {
        members = handleCastPopulation(data.cast);
      }
    } catch (error) {
      console.log(error);
    } finally {
      return members;
    }
  }

  return (
    <div className={styles.member}>
      <div className={styles.member__title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.member__list}>
        {members.map((member: Member) => {
          return (
            <div key={member.id} className={styles.member__list__item}>
              <Avatar
                src={`https://image.tmdb.org/t/p/w92${member.profile_path}`}
              />
              <span>
                <strong>{member.original_name}</strong>
                <small>{(member as CastMember).character}</small>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
