# Movie App

A lightweight React movie catalog built with Vite.

This project lets users browse, filter, and add movies in a simple interactive UI. It is a single-page React app with local state management and responsive components.

## Features

- View a list of favorite movies
- Filter movies by title and minimum rating
- Add new movies with title, description, poster URL, and rating
- View detailed information about each movie on a dedicated page
- Responsive movie cards and simple form validation
- Client-side routing with React Router

## Built With

- React 19
- React Router DOM 7
- Vite
- JavaScript (ESM)
- ESLint

## Project Structure

- `src/App.jsx` - application root and main state management
- `src/components/AddMovie.jsx` - form for adding a new movie
- `src/components/Filter.jsx` - search and rating filter inputs
- `src/components/MovieList.jsx` - renders the filtered list of movies
- `src/components/MovieCard.jsx` - displays individual movie details
- `src/components/MovieDetails.jsx` - detailed page view for individual movies
- `src/App.css` - app styling
- `src/main.jsx` - app entry point
- `index.html` - Vite HTML template

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Usage

- Browse the movie list on the main page.
- Use the search input to filter movies by title.
- Use the rating input to show only movies with a minimum rating.
- Click on a movie card to view detailed information on a dedicated page.
- Add a new movie using the form and click `Add Movie`.
- New movies appear immediately in the list after submission.

## Notes

- Movie data is stored only in local React state, so it resets on refresh.
- Poster images use placeholder URLs by default, but any valid image URL can be used.

## Future Improvements

- Persist movie list to local storage or a backend
- Add edit and delete functionality for movies
- Add form field validation and error messages
- Use TypeScript for stronger typing

## License

This project is open source and available for modification.
