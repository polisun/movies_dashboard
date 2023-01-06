import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { MoviesContext } from "../context";

const CreateMoviePage = () => {
  const [formState, setFormState] = useState({
    title: "",
    director: "",
    year: "",
    runtime: "",
    plot: "",
    actors: "",
    genres: [],
    posterUrl: "",
  });

  const navigate = useNavigate();

  const { setMovies, currentMovie } = useContext(MoviesContext);

  useEffect(() => {
    if (!currentMovie) {
      navigate("/");
    }
    setFormState(currentMovie);
  }, [currentMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateMovie = async () => {
      try {
        const res = await fetch(
          "http://localhost:3010/movies/" + currentMovie.id,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formState,
              id: currentMovie.id,
            }),
          }
        );
        const data = await res.json();
        setMovies((prevState) =>
          prevState.map((movie) =>
            movie.id === currentMovie.id ? data : movie
          )
        );
        navigate("/movie/" + currentMovie.id);
      } catch (error) {
        console.log(error);
      }
    };
    updateMovie();
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]:
        e.target.name === "genres"
          ? e.target.value.split(", ")
          : e.target.value,
    });
  };

  return (
    <div className="movie-form-main">
      <form className="movie-form" onSubmit={handleSubmit}>
        <h1>Обновление</h1>
        <TextField
          value={formState.title}
          onChange={handleChange}
          id="title"
          name="title"
          label="Название фильма"
          variant="outlined"
        />
        <TextField
          value={formState.posterUrl}
          onChange={handleChange}
          id="posterUrl"
          name="posterUrl"
          label="Обложка фильма"
          variant="outlined"
        />
        <TextField
          value={formState.director}
          onChange={handleChange}
          id="director"
          name="director"
          label="Имя режисера"
          variant="outlined"
        />
        <TextField
          value={formState.year}
          onChange={handleChange}
          type="number"
          name="year"
          id="year"
          label="Год выпуска"
          variant="outlined"
        />
        <TextField
          value={formState.runtime}
          onChange={handleChange}
          type="number"
          name="runtime"
          id="runtime"
          label="Продолжительность (мин.)"
          variant="outlined"
        />
        <TextField
          value={formState.genres.join(", ")}
          onChange={handleChange}
          type="text"
          name="genres"
          id="genres"
          label="Жанры"
          variant="outlined"
        />
        <TextField
          value={formState.actors}
          onChange={handleChange}
          type="text"
          name="actors"
          id="actors"
          label="Актеры"
          variant="outlined"
        />
        <TextField
          value={formState.plot}
          onChange={handleChange}
          type="text"
          name="plot"
          id="plot"
          label="Описание фильма"
          variant="outlined"
          multiline
          rows={3}
        />
      </form>
      <footer className="movie-form-footer">
        <Button onClick={() => navigate(-1)} variant="contained">
          Отменить
        </Button>
        <Button onClick={handleSubmit} variant="outlined">
          Сохранить
        </Button>
      </footer>
    </div>
  );
};

export default CreateMoviePage;
