import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book-data-line">
        <p>author</p>
        <p>{book.author}</p>
      </div>
      <div className="book-data-line">
        <p>country</p>
        <p>{book.country}</p>
      </div>
      <div className="book-data-line">
        <p>language</p>
        <p>{book.language}</p>
      </div>
      <div className="book-data-line">
        <p>pages</p>
        <p>{book.pages}</p>
      </div>
      <div className="book-data-line">
        <p>title</p>
        <p>{book.title}</p>
      </div>
      <div className="book-data-line">
        <p>year</p>
        <p>{book.year}</p>
      </div>
    </div>
  );
};

export default Book;
