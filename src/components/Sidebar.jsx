import { MoviesContext } from "../MoviesContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Search from "./Search";
import MoviesList from "./MoviesList";

const Sidebar = () => {
  const { movies } = useContext(MoviesContext);
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Search />
      <MoviesList />
      <div className="sidebar-footer">
        <p>Найдено {movies.length} элементов</p>
        <Button onClick={() => navigate("/addMovie")} variant="outlined">
          <AddIcon fontSize="medium" />
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
