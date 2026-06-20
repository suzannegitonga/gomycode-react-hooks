import { useState } from 'react';
// 1. Import Router components
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails'; // Import the new page
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1, title: "Inception", 
      description: "A thief who steals corporate secrets through the use of dream-sharing technology. Inception takes you on a mind-bending journey through dreams within dreams.", 
      posterURL: "https://placehold.co/300x450/1a1a1a/ffffff?text=Inception", rating: 4.8, 
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2, title: "The Matrix", 
      description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers. The Matrix revolutionized action cinema.", 
      posterURL: "https://placehold.co/300x450/003300/00ff00?text=The+Matrix", rating: 4.7, 
      trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now(), trailerURL: "https://www.youtube.com/embed/dQw4w9WgXcQ" }]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating ? movie.rating >= Number(filterRating) : true;
    return matchesTitle && matchesRating;
  });

  return (
    // 2. Wrap everything in BrowserRouter
    <BrowserRouter>
      <div className="app-container">
        {/* 3. Define the Routes */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <h1>🎬 My Favorite Movies</h1>
              <Filter 
                filterTitle={filterTitle} setFilterTitle={setFilterTitle} 
                filterRating={filterRating} setFilterRating={setFilterRating} 
              />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          
          {/* Movie Details Route (The :id is a dynamic parameter) */}
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;