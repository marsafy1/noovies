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

export interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface Review {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: string;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
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

export const DEFAULT_CREW_MEMBER: CrewMember = {
  adult: false,
  gender: 0,
  id: 0,
  known_for_department: '',
  name: '',
  original_name: '',
  popularity: 0,
  profile_path: '',
  credit_id: '',
  department: '',
  job: '',
};
