import React from "react";

const MovieCard = ({ movie, handleNominate, category, nominations }) => {
  const { Title, Year } = movie;

  const handleButton = () => {
    return nominations.find((mov) => movie.imdbID === mov.imdbID);
  };

  return (
    <div className="MovieCard">
      <h3 className="MovieTitle">{Title}</h3>
      <p className="Year">({Year})</p>

      <button
        className="Button"
        onClick={() => handleNominate(movie, category)}
        disabled={handleButton() && category === "Results"}
      >
        {category === "Results" ? "Nominate" : "Remove"}
      </button>
    </div>
  );
};

export default MovieCard;
