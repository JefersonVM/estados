import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({
    id: 1,
    name: "Corolla",
    color: "black",
    year: 2021,
  });

  const handleYear = (year) => {
    setCar({ ...car, year });
  };

  const handleName = (name) => {
    setCar({ ...car, name });
  };

  return (
    <div className="container">
      <h1>{car.name}</h1>
      <h1>{car.color}</h1>
      <h1>{car.year}</h1>

      <button
        onClick={() => {
          handleYear(2019);
        }}
      >
        2019
      </button>
      <button
        onClick={() => {
          handleYear(2020);
        }}
      >
        2020
      </button>
      <button
        onClick={() => {
          handleYear(2021);
        }}
      >
        2021
      </button>
      <button
        onClick={() => {
          handleYear(2022);
        }}
      >
        2022
      </button>
      <button
        onClick={() => {
          handleName("Honda Civic");
        }}
      >
        Honda Civic
      </button>
    </div>
  );
}

export default App;
