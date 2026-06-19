const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <p className="movie-desc">{movie.description}</p>
      <p className="movie-rating">⭐ {movie.rating} / 5</p>
    </div>
  );
};

export default MovieCard;