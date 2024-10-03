# noovies
noovies is a movie platform built with React and Next.js that allows users to explore trending and new movies. Users can view detailed information about movies, including cast and reviews. Additionally, users can like or dislike movies and save them to their favorites and discover similar movies based on a current movie. The platform includes a dark and light theme toggle for a personalized viewing experience.

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



