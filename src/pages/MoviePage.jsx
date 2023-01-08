import { useEffect, useContext } from "react";
import { Button, Chip } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { MoviesContext } from "../MoviesContext";

const MoviePage = () => {
  const { currentMovie, setCurrentMovie } = useContext(MoviesContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch("http://localhost:3010/movies/" + id);
        const data = await res.json();
        setCurrentMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="movie-page">
      <div className="movie-page-top">
        <Chip variant="outlined" label={`Номер: ${id}`} />
        <Button onClick={() => navigate("/editMovie")} variant="outlined">
          Редактировать
        </Button>
      </div>
      <div className="movie-page-container">
        <img
          onError={(e) => {
            e.target.src =
              "https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png";
          }}
          width="250"
          height="400"
          src={currentMovie?.posterUrl}
          alt={"Film poster"}
        />
        <div className="movie-page-info">
          <h1>{currentMovie?.title}</h1>
          <h2>{currentMovie?.director}</h2>
          <h3>Параметры</h3>
          <div className="movie-page-param">
            <p>Год производства</p>
            <p>{currentMovie?.year}</p>
          </div>
          <div className="movie-page-param">
            <p>Продолжительность</p>
            <p>{`${currentMovie?.runtime} мин.`}</p>
          </div>
          <div className="movie-page-param">
            <p>Жанры</p>
            <p>{currentMovie?.genres?.join(", ")}</p>
          </div>
          <div className="movie-page-param">
            <p>Актеры</p>
            <p>{currentMovie?.actors}</p>
          </div>
        </div>
      </div>
      <div className="movie-page-plot">
        <h2>Описание</h2>
        <p>{currentMovie?.plot}</p>
      </div>
    </div>
  );
};

export default MoviePage;
