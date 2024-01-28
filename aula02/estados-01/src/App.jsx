import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleChangeValue = (value) => {
    const newValue = count + value;
    if (newValue < 0) {
      return;
    }
    setCount(newValue);
  };

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="container">
      <button
        onClick={() => {
          handleChangeValue(+1);
        }}
      >
        Incrementar
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          handleChangeValue(-1);
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

export default App;
