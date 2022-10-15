import React, { useState } from "react";
import "../css/SearchBar.css";
import { TextField, Button } from "../mui";
function SearchBar() {
  const [inputText, setInputText] = useState("");
  const submitSearch = (e) => {
    console.log("data is", e.target.value);
  };
  let inputHandler = (e) => {
    console.log(e.target.value);
    let data = e.target.value;
    console.log("data is: ", data);
  };
  return (
    <>
      <div className="main">
        <h1>Recipe Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search"
            fullWidth
            htmlFor="userInput"
            type="search"
            // onChange={inputHandler}
          />
          <Button variant="contained" id="userInput" onClick={submitSearch}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
