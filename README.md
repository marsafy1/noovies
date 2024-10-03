# noovies
noovies is a movie platform built with React and Next.js integrated with [TMDB API](https://www.themoviedb.org/documentation/api) that allows users to explore trending and new movies. Users can view detailed information about movies, including cast and reviews. Additionally, users can like or dislike movies and save them to their favorites and discover similar movies based on a current movie. The platform includes a dark and light theme toggle for a personalized viewing experience.

## Application Design
- **No external** UI libraries (such as Tailwind, Bootstrap, or MUI5) were used, highlighting my ability to tailor custom styles from scratch. The only installed package is Heroicons, used solely for icons.
- **Performance Optimization**
     - **Server-Side Rendering (SSR)**: Was used for fetching data to leave the client with less responsibilities and to enhance SEO as well. Some data were left for the client because they are lightweight and not crucial for SEO such as movie reviews!
     - **Static Site Generation (SSG)**: Was utilized for pages that do not require real-time data.
     - **Lazy Loading**: Was mostly use for images. Utilizing the power of nextJS.
     - **Appropriate Images Size**: TMDB provides multiple sizes, instead of getting the best, we get the appropriate size depending on the component size.
     - **Paging**: Getting movies in batches(pages) in the homeland page.
     

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

## Structure 
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
## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



