import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  // useParams grabs the :id from the URL (e.g., /movie/1)
  const { id } = useParams(); 
  
  // Find the specific movie in our array
  const movie = movies.find((m) => m.id === Number(id));

  // Fallback if the movie isn't found
  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="movie-details">
      {/* Link to navigate back to the home page */}
      <Link to="/" className="back-btn">← Back to Home</Link>
      
      <h1>{movie.title}</h1>
      
      {/* Embedded Video Trailer */}
      <div className="trailer-container">
        <iframe 
          src={movie.trailerURL} 
          title={`${movie.title} trailer`} 
          allowFullScreen
        ></iframe>
      </div>
      
      <p className="full-description">{movie.description}</p>
      <p className="detail-rating">⭐ {movie.rating} / 5</p>
    </div>
  );
};

export default MovieDetails;