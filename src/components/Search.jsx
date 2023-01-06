import { useContext } from "react";
import { MoviesContext } from "../context";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Button,
} from "@mui/material";

const Search = () => {
  const { search, setSearch } = useContext(MoviesContext);
  return (
    <div className="search">
      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="search">Введите название фильма</InputLabel>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="outlined">Искать</Button>
    </div>
  );
};

export default Search;
