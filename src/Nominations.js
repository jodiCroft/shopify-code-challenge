import React from "react";
import MovieCard from "./MovieCard";

const Nominations = ({ nominations, handleNominate }) => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {nominations.map((nom) => (
          <li key={nom.imdbID}>
            <MovieCard
              movie={nom}
              handleNominate={handleNominate}
              category="Nominations"
              nominations={nominations}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nominations;
