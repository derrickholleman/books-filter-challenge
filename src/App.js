import { useState, useEffect } from "react";
import "./App.css";
import Book from "./Book";
import SearchForm from "./SearchForm";
const booksData = require("./books.json");

function App() {
  const [books, setBooks] = useState(booksData);
  const [isFiltering, setIsFiltering] = useState(false);
  const [authorSearchText, setAuthorSearchText] = useState("");
  const [titleSearchText, setTitleSearchText] = useState("");
  const [countrySearchText, setCountrySearchText] = useState("");
  const [languageSearchText, setLanguageSearchText] = useState("");
  const [yearSearchText, setYearSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  return (
    <div className="App">
      <SearchForm
        setIsFiltering={setIsFiltering}
        authorSearchText={authorSearchText}
        setAuthorSearchText={setAuthorSearchText}
        setFilteredBooks={setFilteredBooks}
        titleSearchText={titleSearchText}
        setTitleSearchText={setTitleSearchText}
        countrySearchText={countrySearchText}
        setCountrySearchText={setCountrySearchText}
        languageSearchText={languageSearchText}
        setLanguageSearchText={setLanguageSearchText}
        yearSearchText={yearSearchText}
        setYearSearchText={setYearSearchText}
        books={booksData}
      />

      <div className="books">
        {!isFiltering &&
          books.map((book, index) => <Book key={index} book={book} />)}

        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
