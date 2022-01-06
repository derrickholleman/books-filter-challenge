import { useState } from "react";
import "./App.css";
import Book from "./Book";
import SearchForm from "./SearchForm";
const booksData = require("./books.json");

function App() {
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
      
      <h1>Total Results: {filteredBooks.length}</h1>
      <div className="books">
        {!isFiltering &&
          booksData.map((book, index) => <Book key={index} book={book} />)}

        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
