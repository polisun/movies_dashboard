import { useContext } from "react";
import { MoviesContext } from "../context";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
