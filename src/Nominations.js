import React from "react";
import MovieCard from "./MovieCard";

const Nominations = ({ nominations, handleNominate }) => {
  return (
    <div className="BorderBox">
      <p>Your Nominations</p>
      <div className="NominationsList">
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
    </div>
  );
};

export default Nominations;
