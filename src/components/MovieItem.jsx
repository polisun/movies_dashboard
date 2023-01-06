import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../context";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const { currentMovie, setCurrentMovie } = useContext(MoviesContext);

  return (
    <li
      className={`movie-item ${
        currentMovie?.id === movie.id && "movie-item-selected"
      }`}
      onClick={() => {
        setCurrentMovie(movie);
        navigate("/movie/" + movie.id);
      }}
    >
      <p className="movie-item-title">{movie.title}</p>
      <div className="movie-item-info">
        <p>{movie.year}</p>
        <span>{movie.genres.join(", ")}</span>
      </div>
    </li>
  );
};

export default Movie;
