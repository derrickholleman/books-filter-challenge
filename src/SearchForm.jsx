import { useEffect } from "react";

const SearchForm = ({
  setIsFiltering,
  authorSearchText,
  setAuthorSearchText,
  titleSearchText,
  setTitleSearchText,
  countrySearchText,
  setCountrySearchText,
  languageSearchText,
  setLanguageSearchText,
  yearSearchText,
  setYearSearchText,
  setFilteredBooks,
  books,
}) => {
  const handleAuthorChange = (e) => {
    setAuthorSearchText(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitleSearchText(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountrySearchText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguageSearchText(e.target.value);
  };

  const handleYearChange = (e) => {
    setYearSearchText(e.target.value);
  };

  const handleClearForm = () => {
    setAuthorSearchText("");
    setTitleSearchText("");
    setCountrySearchText("");
    setLanguageSearchText("");
    setYearSearchText("");
  };

  useEffect(() => {
    if (
      !authorSearchText &&
      !titleSearchText &&
      !countrySearchText &&
      !languageSearchText &&
      !yearSearchText
    ) {
      setIsFiltering(false);
    } else {
      setIsFiltering(true);
    }

    setFilteredBooks(
      books.filter((book) => {
        return (
          book.author
            .toLowerCase()
            .includes(authorSearchText.toLowerCase().trim()) &&
          book.title
            .toLowerCase()
            .includes(titleSearchText.toLowerCase().trim()) &&
          book.country
            .toLowerCase()
            .includes(countrySearchText.toLowerCase().trim()) &&
          book.language
            .toLowerCase()
            .includes(languageSearchText.toLowerCase().trim()) &&
          book.year.toString().includes(yearSearchText.trim())
        );
      })
    );
  }, [
    books,
    authorSearchText,
    titleSearchText,
    countrySearchText,
    languageSearchText,
    yearSearchText,
    setFilteredBooks,
    setIsFiltering
  ]);

  return (
    <div className="search-form">
      <div>
        <label htmlFor="author">author</label>
        <input
          type="text"
          value={authorSearchText}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input
          type="text"
          value={titleSearchText}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="country">country</label>
        <input
          type="text"
          value={countrySearchText}
          onChange={handleCountryChange}
        />
      </div>
      <div>
        <label htmlFor="language">language</label>
        <input
          type="text"
          value={languageSearchText}
          onChange={handleLanguageChange}
        />
      </div>
      <div>
        <label htmlFor="year">year</label>
        <input type="text" value={yearSearchText} onChange={handleYearChange} />
      </div>
      <button className="clear-form-btn" onClick={handleClearForm}>
        Clear Form
      </button>
    </div>
  );
};

export default SearchForm;
