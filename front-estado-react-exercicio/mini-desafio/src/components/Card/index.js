import { useState } from "react";
import CardBack from "../../assets/card-back.png";
import "./style.css";

const Card = ({ slug, image, turned }) => {
  const [isTurned, setIsTurned] = useState(!turned);

  const handleClick = () => {
    if (!isTurned) {
      setIsTurned(true);
    } else {
      setIsTurned(false);
    }
  };

  return (
    <div className="container-card">
      <div className="card" onClick={handleClick}>
        {!isTurned ? (
          <div className="front">
            <img src={image} alt={slug} />
          </div>
        ) : (
          <div className="back">
            <img src={CardBack} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
