'use client';

// External libraries
import React, { useState, useEffect } from 'react';

// Styles
import styles from '@/app/styles/components/movieDetails/meta/detailedMetaMovieInfo.module.scss';

// Interface imports
import { DetailedMovie } from '@/app/interfaces/movies';
import { CrewMember, CastMember } from '@/app/interfaces/members';

// Component imports
import MovieMembers from '@/app/components/movies/movieDetails/MovieMembers';

export default function DetailedMetaMovieInfo({
  movieDetails,
}: {
  movieDetails: DetailedMovie;
}) {
  const [directors, setDirectors] = useState<CrewMember[]>([]);
  const [cast, setCast] = useState<CastMember[]>([]);
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  async function getMovieCredits() {
    console.log(movieDetails);
    let movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movieDetails.id}/credits`;
    console.log(movieCreditsUrl);
    let res = await fetch(movieCreditsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();
    let crew = result.crew;
    console.log(result.cast);
    let directors: CrewMember[] = [];
    let cast = result.cast;
    cast = cast
      .sort((a: CrewMember, b: CrewMember) => b.popularity - a.popularity)
      .slice(0, 10); // Get the 10 most popular from the cast
    crew.forEach((crewMember: CrewMember) => {
      if (crewMember['job'] == 'Director') {
        directors.push(crewMember);
      }
    });
    setDirectors(directors);
    setCast(cast);
  }
  useEffect(() => {
    getMovieCredits();
  }, []);
  return (
    <div className={styles.detailedMetaMovieInfo}>
      {/* <div className={styles.detailedMetaMovieInfo__overview}>
        <h4>Overview</h4>
        <span>{movieDetails.overview}</span>
      </div> */}
      <div className={styles.detailedMetaMovieInfo__cast}>
        <div className={styles.detailedMetaMovieInfo__cast__container}>
          <div
            className={styles.detailedMetaMovieInfo__cast__container__members}
          >
            <MovieMembers movieId={movieDetails.id} castType="cast" />
            <MovieMembers movieId={movieDetails.id} castType="directors" />
          </div>
        </div>
      </div>
    </div>
  );
}
