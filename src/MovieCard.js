import React from "react";

const MovieCard = ({ movie, handleNominate, category, nominations }) => {
  const { Title, Year } = movie;

  const handleButton = () => {
    return nominations.find((mov) => movie.imdbID === mov.imdbID);
  };

  return (
    <div className="MovieCard">
      <h3>{Title}</h3>
      <h5>({Year})</h5>

      <div>
        <button
          onClick={() => handleNominate(movie, category)}
          disabled={handleButton() && category === "Results"}
        >
          {category === "Results" ? "Nominate" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
