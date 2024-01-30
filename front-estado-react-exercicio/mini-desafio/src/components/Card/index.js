import CardBack from "../../assets/card-back.png";
import "./style.css";

const Card = ({ card, stateCard, setStateCard }) => {
  const handleTurnCard = () => {
    const localCards = [...stateCard];

    const currentCard = localCards.find((item) => item.id === card.id);

    const onlyTurnedCards = localCards.filter((item) => item.turned);

    if (onlyTurnedCards.length > 1) {
      return;
    }

    if (onlyTurnedCards.length && card.slug === onlyTurnedCards[0].slug) {
      currentCard.turned = !currentCard.turned;

      setStateCard(localCards);

      setTimeout(() => {
        handleClearCards(currentCard, onlyTurnedCards[0], localCards);
      }, 800);

      return;
    }

    currentCard.turned = !currentCard.turned;

    setStateCard(localCards);

    if (onlyTurnedCards.length) {
      setTimeout(() => {
        localCards.forEach((item) => {
          item.turned = false;
        });

        setStateCard([...localCards]);
      }, 800);
    }
  };

  const handleClearCards = (card1, card2, localCards) => {
    if (card1.id === card2.id) {
      return;
    }

    const filteredCards = localCards.filter(
      (item) => item.id !== card1.id && item.id !== card2.id
    );

    setStateCard(filteredCards);
  };
  return (
    <div className="container-card">
      <div className="card">
        <img
          src={card.turned ? card.image : CardBack}
          alt={`card-${card.slug}`}
          onClick={() => {
            handleTurnCard();
          }}
        />
      </div>
    </div>
  );
};

export default Card;
