import React, { useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
function App() {
  const [data, setData] = useState();
  const apiKey = "3c865aa7fe96459cae1583d69c3e52e3";
  const api = () => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  };

  console.log("data is ", data);
  return (
    <>
      <SearchBar></SearchBar>
      <h1>Testing</h1>
      <button onClick={api}>Click me to generate recipes</button>
    </>
  );
}

export default App;
