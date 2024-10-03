# noovies
![React](https://img.shields.io/badge/react-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![Sass](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![.ENV](https://img.shields.io/badge/dotenv-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=white)

noovies is a movie platform built with React and Next.js integrated with [TMDB API](https://www.themoviedb.org/documentation/api) that allows users to explore trending and new movies. Users can view detailed information about movies, including cast and reviews. Additionally, users can like or dislike movies and save them to their favorites and discover similar movies based on a current movie. The platform includes a dark and light theme toggle for a personalized viewing experience.


## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Structure](#structure)
- [Application Design](#application-design)
- [Naming Conventions](#naming-conventions)
- [Challenges](#challenges)

## Getting Started
Install the dependencies and run the server.

```bash
# Install dependencies using Bun
bun install

# Run the development server
bun dev
```

## Features
### Required Features
- **Display a list of movies**
- **Search for a movie by name**
- **View a movie details page**
- **Add/Remove a movie from your list**
- **View your favorite movies**
### Bonus Features
- **Animations** throughout the whole app, such as when you like/dislike a movie, loading and a vertical slideshow for top movies.
- **Different Viewing Styles** for the homeland page, you can either see the movies in a grid or in reels-like manner.
- **Light/Dark Theme** for a more customized, personal experience.
- **Similar/Suggested Movies** showing similar movies to the one you are currently viewing.
- **Movie Reviews** with the ability to visit the profile of the author.
- **Visting Profiles** you can visit the profile of commentators and leading movie cast.
- **Automatic Movies Addition** whenever the user reaches the end of the page (with a limit of 10 pages).
- 
## Structure 
**Dependency Structure**: The main pages are located inside the `content` folder. Each page is composed of sections, and sections are built from individual components.
```bash

├── assets (For images)
│   └── defaults
├── components (UI Components to allow usability and consistency)
│   ├── appbars
│   ├── feedback
│   ├── movies
│   ├── presentation
│   ├── reviews
│   └── utils (Generic components such as Buttons, Avatars...)
├── content (Pages) <- routing happens here
│   ├── favorites
│   └── movies
├── enums (Constant enums)
│   └── memberType.ts
├── fonts
│   ├── GeistMonoVF.woff
│   └── GeistVF.woff
├── interfaces (Defining types here)
│   ├── members.ts
│   ├── movies.ts
│   ├── navItem.ts
│   ├── reviews.ts
│   └── stateStore
├── layout.tsx
├── page.tsx
├── sections (Main sections)
│   ├── FavoritesSection.tsx
│   ├── MoviesDisplaySection.tsx
│   ├── TrendingPlayshowSection.tsx
│   ├── movieDetails
│   └── moviesContainer
├── services (Services such as navigatiohs and API calls for consistency and reusability)
│   ├── api
│   └── navigation.ts
├── store (For global state management)
│   └── themeStore.ts
└── styles (Custom styling)
    ├── animations.scss
    ├── components
    ├── content
    ├── dynamicVariables.scss
    ├── globals.scss
    ├── layout.scss
    ├── mixins.scss
    ├── pages
    ├── sections
    └── variables.scss
```
  
## Application Design
- **No external** UI libraries (such as Tailwind, Bootstrap, or MUI5) were used, highlighting my ability to tailor custom styles from scratch. The only installed package is Heroicons, used solely for icons.
- **Performance Optimization**
     - **Server-Side Rendering (SSR)**: Was used for fetching data to leave the client with less responsibilities and to enhance SEO as well. Some data were left for the client because they are lightweight and not crucial for SEO such as movie reviews!
     - **Static Site Generation (SSG)**: Was utilized for pages that do not require real-time data.
     - **Lazy Loading**: Was mostly use for images. Utilizing the power of nextJS.
     - **Client Components**: Was used whenever we needed interaction with a DOM element.
     - **Appropriate Images Size**: TMDB provides multiple sizes, instead of getting the best, we get the appropriate size depending on the component size.
     - **Paging**: Getting movies in batches(pages) in the homeland page.
     - **Handling errors & empty results**: All errors are handled gracefully with try/catch statements. Including searching for a movie with invalid ID.
     - **Utilizing media queries**: to create a responsive application 
     

## Naming Conventions

### 1. React Components
   - **Format**: PascalCase
   - **Example**: `MovieCard`, `ThemeSwitch`

### 2. Variables and Functions
   - **Format**: camelCase
   - **Example**: `handleClick`, `movieTitle`

### 3. SCSS Files and Variables
   - **Format**: camelCase
   - **Example**: `$primaryColor`, `$backgroundDark`

### 4. SCSS Class Names (BEM Methodology)
   - **Format**: Block-Element-Modifier (BEM)
   - **Example**: `block__elementModifier`
     - **Block**: The name of the component (e.g., `movieCard`)
     - **Element**: A child of the block (e.g., `movieCard__title`)
     - **Modifier**: A variant or state of the block/element (e.g., `movieCard__titleLarge`)

## Challenges

### 1. Learning New Frameworks
Adapting to frameworks like **Next.js** and **Zustand** introduced new paradigms, particularly in state management and server-side rendering (SSR).  
**Solution**: I followed official documentation and built small, focused projects to understand their core concepts.

### 2. Deciding Between SSR and Client Components
Balancing **SSR** and **Client Components** required careful consideration to ensure optimal performance while maintaining a smooth user experience.  
**Solution**: I used **SSR** for SEO-critical pages and **Client Components** for dynamic interactions.

### 3. Writing CSS from Scratch
Building the entire styling system without UI libraries like Tailwind or Bootstrap allowed me to improve my CSS skills while creating a custom design system.  
**Solution**: I implemented **SCSS** with **BEM** methodology to keep the styles modular and maintainable.



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



