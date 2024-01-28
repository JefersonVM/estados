import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);

    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => handleIncrement()}>Incrementar</button>
    </div>
  );
}

export default App;
