import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import "./pagesCss.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  // const [count, setCount] = useState(1);

  useEffect(() => {
    homeData();
  }, []);

  const homeData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/books");

      setBooks(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const { author, publishYear, title, _id } = books[0];
  // console.log(author, publishYear, title, _id);

  return (
    <>
      <div id="Create-icon">
        <Link to={"/books/create"}>
          <BiBookAdd className="icon-size" />
        </Link>
      </div>
      <section id="home-container">
        {books.map((book) => {
          const { author, publishYear, title, _id } = book;

          return (
            <div className="book-container" key={_id}>
              <div className="div1 border-1px">
                <h3>{publishYear}</h3>
              </div>
              <div className="div2 border-1px">
                <h3>{title}</h3>
                <p>Author: {author}</p>
              </div>
              <div className="div3 border-1px">
                <BiShowAlt className="icon-size" />
                <TiEdit className="icon-size" />
                <MdDeleteForever className="icon-size" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
