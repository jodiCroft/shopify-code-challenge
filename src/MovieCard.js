import React, { useState } from "react";

const MovieCard = ({ movie, handleNominate, category, nominations }) => {
  const { Title, Year, Poster } = movie;

  const handleButton = () => {
    return nominations.find((mov) => movie.imdbID === mov.imdbID);
  };

  return (
    <div>
      <h3>{Title}</h3>
      <h4>({Year})</h4>
      <img src={Poster} style={{ width: "150px", height: "200px" }}></img>
      <button
        onClick={() => handleNominate(movie, category)}
        disabled={handleButton() && category === "Results"}
      >
        {category === "Results" ? "Nominate" : "Remove"}
      </button>
    </div>
  );
};

export default MovieCard;
