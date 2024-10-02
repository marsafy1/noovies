import React, { useState, useEffect } from 'react';
import styles from '@/app/styles/components/movieDetails/meta/detailedMetaMovieInfo.module.scss';
import SafeImage from '@/app/components/presentation/SafeImage';
import PosterPlaceholder from '@/app/assets/defaults/movies/poster-placeholder.png';
import {
  DetailedMovie,
  CrewMember,
  CastMember,
  Review,
  DEFAULT_CREW_MEMBER,
} from '@/app/interfaces/movies';
import Adult from '@/app/components/movies/movieCards/info/Adult';
import Language from '@/app/components/movies/movieCards/info/Language';
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';
import Favorite from '@/app/components/movies/movieCards/actions/Favorite';
import Poster from '@/app/components/movies/movieCards/info/Poster';
import MainMetaMovieInfo from '@/app/components/movies/movieDetails/meta/MainMetaMovieInfo';
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
