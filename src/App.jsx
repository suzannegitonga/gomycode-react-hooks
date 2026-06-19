import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  // State for the list of movies
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://placehold.co/300x450/1a1a1a/ffffff?text=Inception",
      rating: 4.8
    },
    {
      id: 2,
      title: "The Matrix",
      description: "A computer hacker learns about the true nature of reality.",
      posterURL: "https://placehold.co/300x450/003300/00ff00?text=The+Matrix",
      rating: 4.7
    }
  ]);

  // State for the filters
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  // Function to add a new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  // Logic to filter the movies
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating ? movie.rating >= Number(filterRating) : true;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app-container">
      <h1>🎬 My Favorite Movies</h1>
      
      <Filter 
        filterTitle={filterTitle} 
        setFilterTitle={setFilterTitle} 
        filterRating={filterRating} 
        setFilterRating={setFilterRating} 
      />
      
      <AddMovie addMovie={addMovie} />
      
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;