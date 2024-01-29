import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import "./style.css";
import Cards from "../../cards";

function Main() {
  return (
    <div className="container">
      <div className="container-navbar">
        <Navbar />
      </div>
      <div className="container-main">
        <div className="container-cards">
          {Cards.map((card) => {
            return (
              <Card
                key={card.id}
                slug={card.slug}
                image={card.image}
                turned={card.turned}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
