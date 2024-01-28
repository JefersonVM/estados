import "./style.css";

const Post = ({title, text}) => {
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
      <p><a href="#post">Ler mais</a></p>
    </div>
  );
};

export default Post;
