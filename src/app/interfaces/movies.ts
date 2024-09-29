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
  videos?: MovieVideos;
  vote_average: number;
  vote_count: number;
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

// Default Objects
export const DEFAULT_MOVIE = {
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
