import React, { useState } from "react";
import "../css/SearchBar.css";
import { Button } from "@mui/material";
function SearchBar({ grabSearchResults }) {
  const [searchResults, setSearchResults] = useState("");

  const searchRecipe = (e) => {
    e.preventDefault();
    grabSearchResults(searchResults);
  };

  return (
    <>
      <div className="main">
        <h1>Recipe Search</h1>
        <div className="search">
          <form onSubmit={searchRecipe} className="searchForm">
            <label className="label">Search for Recipes</label>
            <input
              type="text"
              value={searchResults}
              onChange={(e) => setSearchResults(e.target.value)}
            />
            <Button variant="contained" id="userInput" onClick={searchRecipe}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
