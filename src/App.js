import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import Nominations from "./Nominations";

function App() {
  const [search, setSearch] = useState("");
  const [nominations, setNominations] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleNominate = (movie, category) => {
    if (category === "Results" && nominations.length < 5) {
      setNominations([...nominations, movie]);
    } else {
      let newNominations = nominations.filter((n) => n.imdbID !== movie.imdbID);
      setNominations(newNominations);
    }
    if (nominations.length === 5)
      alert("You already have 5 nominations, you big movie buff...Thank you!");
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <Results
        nominations={nominations}
        search={search}
        handleNominate={handleNominate}
      />
      <Nominations nominations={nominations} handleNominate={handleNominate} />
    </div>
  );
}

export default App;
