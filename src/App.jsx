import { Routes, Route } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import MoviePage from "./pages/MoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import AddMoviePage from "./pages/AddMoviePage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <header className="header">
        <Typography variant="h5">Админка фильмотеки</Typography>
        <Button variant="contained">Саламатина Полина</Button>
      </header>
      <main className="main">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <h1>Выберите фильм</h1>
              </div>
            }
          />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/addMovie" element={<AddMoviePage />} />
          <Route path="/editMovie" element={<EditMoviePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
