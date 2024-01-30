import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import cards from "../../cards";
import { useState } from "react";
import CongratsImg from "../../assets/congrats.png";

function Main() {
  const [stateCards, setStateCards] = useState([...cards]);
  return (
    <div className="container">
      <div className="container-navbar">
        <Sidebar cards={cards} setStateCards={setStateCards} />
      </div>
      <div className="container-main">
        <div className="container-cards">
          {stateCards.length === 0 && <img src={CongratsImg} alt="" />}
          {stateCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              stateCard={stateCards}
              setStateCard={setStateCards}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
