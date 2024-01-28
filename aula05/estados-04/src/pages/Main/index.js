import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Post from "../../components/Post";
import "./style.css";
import { useState } from "react";

function Main() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Título do 01", text: "Corpo do 01" },
    { id: 2, title: "Título do 02", text: "Corpo do 02" },
    { id: 3, title: "Título do 03", text: "Corpo do 03" },
    { id: 4, title: "Título do 04", text: "Corpo do 04" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="container">
      <Header handleToggleModal={handleToggleModal} />
      <div className="container-post">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} text={post.text} />
        ))}
      </div>
      <Modal
        handleToggleModal={handleToggleModal}
        modalOpen={modalOpen}
        setPosts={setPosts}
        posts={posts}
      />
    </div>
  );
}

export default Main;
