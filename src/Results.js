import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Results = ({ search, handleNominate, nominations }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=846a660`)
      .then((res) => res.json())
      .then((results) => setResults(results.Search));
  }, [search]);
  // stretch: paginate results....
  if (results) {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {results.map((res) => (
            <li key={res.imdbID}>
              <MovieCard
                movie={res}
                handleNominate={handleNominate}
                nominations={nominations}
                category="Results"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>search for a movie...</div>;
};

export default Results;
