import "./style.css";
import LogoImg from "../../assets/img/puzzle_piece_icon .svg";

const Sidebar = ({ setStateCards, cards }) => {
  const handleReset = () => {
    const localCards = [...cards];
    localCards.forEach((item) => {
      item.turned = false;
    });
    setStateCards([...localCards]);
  };

  return (
    <nav className="container-navbar">
      <div className="logo">
        <img src={LogoImg} alt="logo" />
        <h1>cubos puzzle</h1>
      </div>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        reset
      </button>
    </nav>
  );
};

export default Sidebar;
