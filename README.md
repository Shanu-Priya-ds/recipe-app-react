# Recipe App

A modern React application that lets you explore, search, and save your favorite recipes. Browse recipes by category, view detailed ingredients and instructions, and maintain a personalized collection of favorites.

## Features

- **Browse by Category** - Explore recipes organized by food categories (Seafood, Dessert, Vegetarian, etc.)
- **Search Recipes** - Find recipes by name with instant search results
- **Recipe Details** - View complete recipe information including ingredients, measurements, and cooking instructions
- **Favorites** - Save your favorite recipes to a persistent collection stored in local storage
- **Responsive Design** - Built with Tailwind CSS for a modern, mobile-friendly interface
- **Loading States** - Visual spinner feedback while fetching data from the API

## Tech Stack

- **React 19** - UI library with hooks and context API
- **React Router 7** - Client-side routing for multi-page navigation
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and dev server
- **TheMealDB API** - Free recipe data source

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd recipie-app-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (Vite default port)
   - The app will hot-reload as you make changes

## Running the Project

- **Development**: `npm run dev` - Starts the dev server with hot module replacement
- **Build**: `npm run build` - Compiles TypeScript and bundles for production
- **Lint**: `npm lint` - Runs ESLint to check code quality
- **Preview**: `npm run preview` - Serves the production build locally

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components for each route
├── services/        # API calls and data fetching
├── hooks/           # Custom React hooks (useFetch)
├── context/         # Context providers (Favorites)
├── types/           # TypeScript type definitions
└── App.tsx          # Main app component with routes
```

## Key Pages

- **Home** (`/`) - Landing page with featured categories
- **Recipes** (`/category/:categoryName`) - Browse recipes by selected category
- **Recipe Details** (`/recipe/:recipeId`) - Full recipe information with ingredients and instructions
- **Search Results** (`/search`) - Display search query results
- **Favorites** (`/favourites`) - View and manage saved favorite recipes

---

## Reflection

### Most Challenging Part

The most challenging aspect was **managing the favorites state across the entire application while keeping it persistent**. I needed to ensure that:

1. The favorites list persists across page refreshes (using localStorage)
2. The favorite icon toggles correctly on recipe cards and detail pages
3. Favorite recipes are fetched with complete details when navigating to the Favorites page
4. The UI stays in sync when toggling favorites from different pages

The complexity came from coordinating state updates across multiple components that didn't have a direct parent-child relationship. Without proper context management, I would have faced prop-drilling issues.

### Design Decision: Favorites Context

I structured the Favorites feature using **React Context API** instead of prop drilling or a state management library like Redux. Here's why:

**Decision**: Create a `FavoritesContext` with a provider that wraps the entire app, storing favorite recipe IDs in localStorage.

**Reasoning**:
- **Scalability**: Context allows any component at any depth to access and update favorites without prop drilling
- **Persistence**: Storing favorite IDs in localStorage means the list survives page refreshes
- **Simplicity**: For this project scope, Context is sufficient without the overhead of Redux
- **Single Source of Truth**: All favorite state flows through one context, making it easier to debug and modify

**Implementation Details**:
- Store only recipe IDs in context/localStorage to minimize storage size
- When viewing favorites, use `Promise.all()` in `fetchMultipleRecipiesById()` to efficiently fetch all recipe details in parallel
- Toggle favorites directly on the RecipeCard through context, so the UI updates immediately across the app

This approach keeps the codebase clean while maintaining a responsive, persistent favorite-tracking experience.

### Secondary Design Decision: Custom useFetch Hook

I created a **`useFetch` custom hook** to handle data fetching logic and loading states consistently across pages. Instead of duplicating fetch logic in every page component, the hook encapsulates:

- Loading state management
- Error handling (with fallback empty arrays)
- Artificial delay (setTimeout) for UI testing and demonstrating the loading spinner

This promotes code reuse and makes the components cleaner and more focused on rendering UI rather than managing fetch logic.
