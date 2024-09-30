'use client';
import React, { useState, useEffect, use } from 'react';
import { MovieIDParams } from '@/app/interfaces/movies';
import { Movie, Review, DEFAULT_MOVIE } from '@/app/interfaces/movies';
import TopMovieCard from '@/app/components/movies/TopMovieCard';
import Video from '@/app/components/presentation/Video';
import ReviewCard from '@/app/components/reviews/ReviewCard';
import Image from 'next/image';

import Adult from '@/app/components/movies/movieCards/info/Adult';
import Language from '@/app/components/movies/movieCards/info/Language';
import VoteAverage from '@/app/components/movies/movieCards/info/VoteAverage';
import VoteCount from '@/app/components/movies/movieCards/info/VoteCount';

export default function page({ params }: { params: MovieIDParams }) {
  const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  const [movieDetails, setMovieDetails] = useState<Movie>(DEFAULT_MOVIE);
  const [reviews, setReviews] = useState<Review[]>([]);

  const [trailerKey, setTrailerKey] = useState<string>('');

  async function getMovieDetails() {
    let movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.movie_id}?append_to_response=videos`;
    let res = await fetch(movieDetailsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();

    if (result.videos.results.length > 0) {
      setTrailerKey(result.videos.results[0]['key']);
    }

    setMovieDetails(result);
  }

  async function getMovieReviews() {
    let movieReviewsUrl = `https://api.themoviedb.org/3/movie/${params.movie_id}/reviews`;
    let res = await fetch(movieReviewsUrl, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    let result = await res.json();
    console.log(result);
    setReviews(result.results);
  }

  useEffect(() => {
    getMovieDetails();
    getMovieReviews();
  }, []);

  return (
    <div className="movie-details">
      <div className="movie-details__info">
        <div className="movie-details__info__cover">
          <div className="movie-details__info__cover__gradient"></div>
          <img
            src={
              'https://image.tmdb.org/t/p/w780/' + movieDetails.backdrop_path
            }
          />
        </div>
        <div className="movie-details__info__meta">
          <img
            src={'https://image.tmdb.org/t/p/w780/' + movieDetails.poster_path}
            className="movie-details__info__meta__poster"
            alt="Movie Image"
          />
          <div className="movie-details__info__meta__about">
            <div className="movie-details__info__meta__about__top">
              <div className="movie-details__info__meta__about__top__title">
                {movieDetails.title}
              </div>
            </div>
            <div className="movie-details__info__meta__about__bottom">
              <div className="movie-details__info__meta__about__bottom__tags">
                <div className="d-flex">
                  <VoteAverage average={movieDetails.vote_average} />
                  <VoteCount count={movieDetails.vote_count} />
                </div>
                <div className="d-flex">
                  <Language lang={movieDetails.original_language} />
                  <Adult adult={movieDetails.adult} />
                </div>
              </div>
              <div className="movie-details__info__meta__about__bottom__overview">
                {movieDetails.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-details__reviews">
        <div>Reviews</div>
        <div className="movie-details__reviews__list">
          {reviews.map((review: Review, index: number) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
}
