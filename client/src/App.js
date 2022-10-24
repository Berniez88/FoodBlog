import React, { useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
function App() {
  // States
  const [APIData, SetAPIData] = useState();
  // State used to retrieve the userInput in the child component SearchBar
  const [userSearchedResults, setUserSearchedResults] = useState("");
  const apiKey = "256693ab455d4924b302bc239a965907";

  // Function that calls the API
  const api = (userInput) => {
    fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
    )
      .then((res) => res.json())
      .then((data) => SetAPIData(data))
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  };

  console.log("te data is", APIData);
  return (
    <>
      <SearchBar
        api={api}
        setUserSearchedResults={setUserSearchedResults}
      ></SearchBar>
    </>
  );
}

export default App;
