/*
  Review interface
  - Defines the structure for a movie review, including author details, content, and metadata such as creation and update times.
*/

// Interfaces
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
