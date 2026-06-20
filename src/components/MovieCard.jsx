import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    // The Link component handles the navigation
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        <h3>{movie.title}</h3>
        <p className="movie-desc">{movie.description}</p>
        <p className="movie-rating">⭐ {movie.rating} / 5</p>
      </div>
    </Link>
  );
};

export default MovieCard;