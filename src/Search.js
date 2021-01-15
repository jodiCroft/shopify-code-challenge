import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
    </div>
  );
};

export default Search;
