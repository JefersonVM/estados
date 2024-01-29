import "./style.css";
import LogoImg from "../../assets/img/puzzle_piece_icon .svg";

const Navbar = () => {
  return (
    <nav className="container-navbar">
      <div className="logo">
        <img src={LogoImg} alt="logo" />
        <h1>cubos puzzle</h1>
      </div>
      <button>reset</button>
    </nav>
  );
};

export default Navbar;
