import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function navigateToMovieDetails(
  router: AppRouterInstance,
  movieId: number
) {
  router.push(`/content/movies/${movieId}`); // Replace with your desired path
}
