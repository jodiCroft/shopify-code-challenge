import React from "react";
import MovieCard from "./MovieCard";

const Nominations = ({ nominations, handleNominate }) => {
  return (
    <div className="BorderBox">
      <p className="TitleText">Your Nominations</p>
      <div className="NominationsList">
        <div>
          {nominations.map((nom) => (
            <div key={nom.imdbID}>
              <MovieCard
                movie={nom}
                handleNominate={handleNominate}
                category="Nominations"
                nominations={nominations}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nominations;
