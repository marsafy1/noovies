// Interfaces
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  popularity: number;
  poster_path: string;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
  runtime?: number;
}

export interface DetailedMovie extends Movie {
  videos: MovieVideos;
  genres: MovieGenre[];
}

export interface MovieVideos {
  results: string[];
}

export interface MovieIDParams {
  movie_id: number;
}

export interface MovieGenre {
  id: number;
  name: string;
}
// Default Objects
export const DEFAULT_MOVIE: Movie = {
  id: 0,
  title: '',
  original_title: '',
  original_language: 'en',
  overview: '',
  adult: false,
  backdrop_path: '',
  genre_ids: [0],
  popularity: 0,
  poster_path: '',
  release_date: '',
  video: false as const,
  vote_average: 0,
  vote_count: 0,
};

export const DEFAULT_DETAILED_MOVIE: DetailedMovie = {
  ...DEFAULT_MOVIE,
  videos: { results: [] },
  genres: [],
};
