import React from "react";
import "../css/SearchBar.css";
import cover from "../images/food.jpg";

function SearchBar() {
  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" placeholder="Search Anything" />
          <button type="submit">Click me</button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
