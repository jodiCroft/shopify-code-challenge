import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="BorderBox">
      <div>
        <input type="text" placeholder="Movie title" onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
