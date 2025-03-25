import React, { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, author, description, Image});
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submitted</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;