import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [book, setBook] = useState({});

  const handleSaveBook = () => {
    setBook({
      title,
      author,
      publishYear,
    });
    const fetch = async () => {
      try {
        await axios.post("http://localhost:3000/books", book);
      } catch (e) {
        console.log("Same error in posting books");
      }
    };

    fetch();
  };
  return (
    <section>
      <h1>Create Book</h1>
      <div id="create-input-div">
        <label htmlFor="book-title">Title:</label>
        <input
          type="text"
          className="border-1px"
          placeholder="Enter title..."
          id="book-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="book-author">Author :</label>
        <input
          className="border-1px"
          placeholder="Enter Auhtor..."
          id="book-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>

        <label htmlFor="book-year">Publish Year:</label>
        <input
          className="border-1px"
          placeholder="Enter Year..."
          id="book-year"
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        ></input>
        <button onClick={handleSaveBook}>Save</button>
      </div>
    </section>
  );
};

export default CreateBooks;
