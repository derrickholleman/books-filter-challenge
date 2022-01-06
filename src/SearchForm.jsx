import React from "react";

const SearchForm = () => {
  return (
    <div className="search-form">
      <div>
        <label htmlFor="author">author</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="country">country</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="language">language</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="year">year</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default SearchForm;
