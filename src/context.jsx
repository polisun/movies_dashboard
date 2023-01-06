import { useEffect, useState, createContext } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:3010/movies/?q=" + search);
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [search]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
        currentMovie,
        setCurrentMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
