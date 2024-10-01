import React, { useState, useEffect } from 'react';
import styles from '@/app/styles/components/movieDetails/movieInfo.module.scss';
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

export default function MovieInfo({
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
    <div className={styles.movieInfo__meta}>
      <SafeImage
        src={'https://image.tmdb.org/t/p/w780/' + movieDetails.poster_path}
        altSrc={PosterPlaceholder}
        imgClassName={styles.movieInfo__meta__poster}
        alt="Movie Image"
        width={250}
        height={350}
      />
      <div className={styles.movieInfo__meta__about}>
        <div className={styles.movieInfo__meta__about__top}>
          <div className={styles.movieInfo__meta__about__top__title}>
            {movieDetails.title}
            <br />
            {movieDetails.release_date}
          </div>
          <div className={styles.movieInfo__meta__about__top__genres}>
            {movieDetails.genres.map((genre) => {
              return (
                <div
                  className={styles.movieInfo__meta__about__top__genres__genre}
                  key={genre.id}
                >
                  {genre.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.movieInfo__meta__about__bottom}>
          <div className={styles.movieInfo__meta__about__bottom__tags}>
            <div className="d-flex">
              <VoteAverage average={movieDetails.vote_average} />
              <VoteCount count={movieDetails.vote_count} />
            </div>
            <div className="d-flex">
              {`${movieDetails.runtime} mins`}
              <Language lang={movieDetails.original_language} />
              <Adult adult={movieDetails.adult} />
            </div>
          </div>
          <div className={styles.movieInfo__meta__about__bottom__cast}>
            <div
              className={styles.movieInfo__meta__about__bottom__cast__container}
            >
              <div
                className={
                  styles.movieInfo__meta__about__bottom__cast__container__castGroup
                }
              >
                <div
                  className={
                    styles.movieInfo__meta__about__bottom__cast__container__castGroup__title
                  }
                >
                  <h4>Directors</h4>
                </div>
                <div
                  className={
                    styles.movieInfo__meta__about__bottom__cast__container__castGroup__list
                  }
                >
                  {directors.map((director: CrewMember) => {
                    return (
                      <div key={director.id}>{director.original_name}</div>
                    );
                  })}
                </div>
              </div>
              <div
                className={
                  styles.movieInfo__meta__about__bottom__cast__container__castGroup
                }
              >
                <div
                  className={
                    styles.movieInfo__meta__about__bottom__cast__container__castGroup__title
                  }
                >
                  <h4>Cast</h4>
                </div>
                <div
                  className={
                    styles.movieInfo__meta__about__bottom__cast__container__castGroup__list
                  }
                >
                  {cast.map((castMember: CastMember) => {
                    return (
                      <div key={castMember.id}>{castMember.original_name}</div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.movieInfo__meta__about__bottom__overview}>
            {movieDetails.overview}
          </div>
          <div>
            <Favorite movieId={movieDetails.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
