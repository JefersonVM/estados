import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, name: "Titanic", active: false },
    { id: 2, name: "Avatar", active: true },
    { id: 3, name: "Star Wars", active: false },
    { id: 4, name: "Star Wars", active: true },
    { id: 5, name: "Harry Potter", active: false },
    { id: 6, name: "Game of Thrones", active: true },
  ]);

  const handleFilterOnlyActive = () => {
    const newMovies = movies.filter((movie) => movie.active);
    setMovies(newMovies);
  };

  const handleChangeActives = () => {
    const localMovies = [...movies];

    localMovies.forEach((movie) => (movie.active = true));

    setMovies(localMovies);
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          handleFilterOnlyActive();
        }}
      >
        Somente Ativos
      </button>
      <button
        onClick={() => {
          handleChangeActives(handleChangeActives());
        }}
      >
        Ativar Todos
      </button>
      <ul>
        {movies.map(
          (movie) => movie.active && <li key={movie.id}>{movie.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
