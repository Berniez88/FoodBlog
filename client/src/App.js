import React, { useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
import { handleBreakpoints } from "@mui/system";
function App() {
  // States
  const [APIData, SetAPIData] = useState("");
  const [id, SetId] = useState([]);
  const [recipeInfo, setRecipeInfo] = useState();
  const [userSearchedResults, setUserSearchedResults] = useState("");

  const apiKey = "dfee2e6419d14f5989a2c277848d8def";
  let ids = [];

  // Grabs the search results/id we need
  const grabSearchResults = async (userInput) => {
    const response = await fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
    );
    const searchResultsData = await response.json();
    SetAPIData(searchResultsData);
    console.log("searchResultsData is", searchResultsData);
  };

  // Stores the id so we can fetch the additional info
  const grabIds = () => {
    for (let key in APIData.results) {
      // SetId([...id, APIData.results[key].id]); returns an infinite rerender error
      ids.push(APIData.results[key].id);
      // SetId((prevState) => [...prevState, APIData.results[key].id]);
    }
  };
  grabIds();

  async function loadRecipes() {
    for (let id of ids) {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      );
      const recipeInfo = await response.json();
      console.log("recipeInfo is", recipeInfo);
      // setRecipeInfo(recipeInfo);
    }
  }
  loadRecipes();

  console.log("recipeInfo is now: ");
  return (
    <>
      <SearchBar
        grabSearchResults={grabSearchResults}
        setUserSearchedResults={setUserSearchedResults}
      ></SearchBar>
    </>
  );
}

export default App;
