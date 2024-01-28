import "./style.css";
import { useState } from "react";

const Modal = ({ handleToggleModal, modalOpen, setPosts, posts }) => {
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleCreatePost = () => {
    if (!input || !textArea) {
      alert("Preencha todos os campos!");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title: input,
      text: textArea,
    };
    setPosts([...posts, newPost]);
    setInput("");
    setTextArea("");
    handleToggleModal();
  };
  return (
    <>
      {modalOpen && (
        <div className="modal-container">
          <div className="modal">
            <h2>Criar Post</h2>
            <input
              type="text"
              placeholder="Título"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <textarea
              placeholder="Texto"
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value);
              }}
            ></textarea>
            <button
              className="btn-primary"
              onClick={() => {
                handleCreatePost();
              }}
            >
              Cadastrar Novo Post
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                handleToggleModal();
              }}
            >
              Fechar Cadastro
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
