import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'], // Configure external image domains
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/app/styles')], // Setup absolute path for Sass
  },
};

export default nextConfig;
