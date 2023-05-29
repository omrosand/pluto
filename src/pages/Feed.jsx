import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [charactersLeft, setCharactersLeft] = useState(280);

  const handleModal = (status) => {
    if (status) {
      setShowModal(true);
      setCharactersLeft(280);
    }
    if (!status) {
      setShowModal(false);
      setContent("");
      setCharactersLeft(280);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    setCharactersLeft(280 - newContent.length);
  };
  const handleSubmitPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: new Date().toLocaleString(),
      content: content,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setContent("");
    setShowModal(false);
  };

  return (
    <>
      <h1>Feed</h1>
      <button onClick={() => handleModal(true)} className="newPostBtn">
        <BiMessageAdd />
      </button>
      <section className="posts">
        {posts.length > 0
          ? posts.map((post) => (
              <article key={post.id} className="post">
                <p className="postId">{post.id}</p>
                <p className="postContent">{post.content}</p>
              </article>
            ))
          : null}
      </section>
      {showModal && (
        <div className="modalOverlay" onClick={() => handleModal(false)}>
          <div className="modalContent" onClick={handleModalClick}>
            <div className="modalHeader">
              <h2>Ny post:</h2>
              <p>{charactersLeft} tegn igjen.</p>
            </div>
            <form onSubmit={handleSubmitPost}>
              <textarea
                id="content"
                rows="4"
                cols="50"
                autoFocus
                value={content}
                maxLength={280}
                onChange={handleContentChange}
              ></textarea>
              <div>
                <button type="button" onClick={() => handleModal(false)}>
                  Avbryt
                </button>
                <button type="submit">Send!</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
