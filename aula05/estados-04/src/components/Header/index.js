import "./style.css";

const Header = ({ handleToggleModal }) => {
  return (
    <header className="header">
      <h1>Meu Blog</h1>
      <button
        className="btn-primary"
        onClick={() => {
          handleToggleModal();
        }}
      >
        Criar post
      </button>
    </header>
  );
};

export default Header;
