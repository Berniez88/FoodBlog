import React, { useState } from "react";
import "../css/SearchBar.css";
import { TextField, Button } from "../mui";
function SearchBar({ api, setUserSearchedResults }) {
  const [searchResults, setSearchResults] = useState("");

  const searchRecipe = (e) => {
    e.preventDefault();
    console.log("user typed in", searchResults);
    api(searchResults);
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

          {/* <TextField
            id="outlined-basic"
            label="Search"
            fullWidth
            htmlFor="userInput"
            type="search"
            onChange={inputHandler}
          />

          <Button variant="contained" id="userInput" onClick={submitSearch}>
            Submit
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
