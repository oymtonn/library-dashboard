import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value || "science");
  };

  return (
    <input
      type="text"
      placeholder="Search for a book..."
      value={input}
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
