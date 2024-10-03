// External libraries
import React from 'react';

// Enums
import { memberTypes } from '@/app/enums/memberType';

// Interfaces
import { CrewMember, CastMember } from '@/app/interfaces/members';

// Components
import Member from '@/app/components/movies/movieCards/info/Member';

// Styles
import styles from '@/app/styles/components/movieDetails/movieMembers.module.scss';

// Services
import { get } from '@/app/services/api/requests';

/*
  MovieMembers component
  - Displays movie members including cast and director.
*/

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

      if (castType == memberTypes.directors) {
        members = handleDirectorsPopulation(data.crew);
      } else if (castType == memberTypes.cast) {
        members = handleCastPopulation(data.cast);
      }
    } catch (error) {
      console.error(error);
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
          return <Member key={member.id} member={member} />;
        })}
      </div>
    </div>
  );
}
