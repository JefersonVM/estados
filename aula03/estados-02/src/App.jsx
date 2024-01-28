import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Jeferson");
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    id: 1,
    modelo: "Corolla",
    color: "black",
  });
  const [movies, setMovies] = useState([
    { id: 1, name: "Titanic", active: false },
    { id: 2, name: "Avatar", active: true },
    { id: 3, name: "Star Wars", active: false },
  ]);
  const [jobs, setJobs] = useState(null);

  console.log(number);
  console.log(name);
  console.log(open);
  console.log(car);
  console.log(movies);
  console.log(jobs);

  return (
    <div className="container">
      <h1>{number}</h1>
      <h1>{name}</h1>
      <h1>{open ? "true" : "false"}</h1>
      <h1>{car.modelo}</h1>
      <h1>{movies[0].name}</h1>
      <h1>{jobs ? "jobs ok!" : "jobs not"}</h1>
    </div>
  );
}

export default App;
