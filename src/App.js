import { useState } from "react";
import "./App.css";
import Book from "./Book";
const booksData = require("./books.json");

function App() {
  return (
    <div className="App">
      <div className="books">
        {booksData.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
