import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CookieContext } from "../../api/SessionContext.js";
import noCover from "../../noCover.png";

function Search() {
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("");
  const [uuid] = useContext(CookieContext);

  useEffect(() => {
    axios(`http://localhost:7000/book/search/${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        id: uuid,
      },
    })
      .then((resp) => {
        setBooks(resp.data.books);
        setStatus(resp.data.status);
      })
      .catch(() => setErrorMessage("No results by that title."));
  }, [search, uuid]);

  return (
    <div className="container mt-2 mb-5" id="stand-width">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mr-sm-2 mb-4"
        type="search"
        placeholder="Search"
        aria-label="Search"
      ></input>
      <div>
        {status === "complete" &&
          books !== undefined &&
          books.map((book, idx) => {
            const link = "/Details/" + `${book.id}`;

            return (
              <div className="media mb-3" key={`book-${idx}`}>
                {book.imageLinks !== undefined && (
                  <Link to={link}>
                    <img
                      src={`${book.imageLinks.smallThumbnail}`}
                      alt={book.title}
                      width="150"
                      height="220.875"
                      className="mr-3"
                    />
                  </Link>
                )}
                {book.imageLinks === undefined && (
                  <Link to={link}>
                    <img
                      src={`${noCover}`}
                      alt={book.title}
                      width="150"
                      height="220.875"
                      className="mr-3 book-shadow"
                    />
                  </Link>
                )}

                <div className="media-body">
                  <h2 className="h4 book-title">
                    <Link to={link}>
                      <a href="#" class="text-dark">
                        {book.title}
                      </a>
                    </Link>
                  </h2>
                  {book.authors !== undefined &&
                    book.authors.map((author) => {
                      return <div>{author}</div>;
                    })}
                </div>
              </div>
            );
          })}
      </div>
      {status === "complete" && books && books.length === 0 && (
        <div>{errorMessage}</div>
      )}
    </div>
  );
}

export default Search;
