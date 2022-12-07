import React, { useEffect, useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
import RecipeBox from "./components/RecipeBox";
function App() {
  //! One problem I have is test recipeData wont clear after a new search
  // States
  const [recipeData, SetRecipeData] = useState([]);
  const apiKey = "dfee2e6419d14f5989a2c277848d8def";

  //! ideas: I can store grabSearchResults and grabIds in one function and chain them/ I can also then put it in an useEffect
  let ids = [];
  let recipeObjects = [];
  let recipeResults;
  // Grabs the search results/id we need
  const grabSearchResults = async (userInput) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
    );
    const initialFetchData = await res.json();
    console.log("initialFetchData", initialFetchData);
    recipeResults = await grabIds(initialFetchData.results);
    console.log("recipeResults is: AFTER THE AWAIT ", recipeResults);
  };

  // Stores the id so we can fetch the additional info
  //! store id in states
  const grabIds = async (initialFetchDataResults) => {
    for (let key in initialFetchDataResults) {
      // SetId([...id, initialFetch.results[key].id]); returns an infinite rerender error
      ids.push(initialFetchDataResults[key].id);
      // SetId((prevState) => [...prevState, initialFetch.results[key].id]);
    }
    return await loadRecipes();
  };

  // Use the ids of the recipe we searched to get additional info on the recipe
  //TODO: add new state for loadRecipes
  //TODO: set fetched data to states
  async function loadRecipes() {
    for (let id of ids) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        const recipeInfo = await response.json();
        recipeObjects.push(recipeInfo);
        SetRecipeData((prevState) => {
          return [...prevState, recipeInfo];
        });
      } catch (err) {
        console.log("Error for loadRecipes is: ", err);
      }
    }

    // if (recipeObjects.length === 0) {
    //   console.log("here");
    //   return <h1>No recipes searched</h1>;
    // } else {
    //   console.log("else statement");
    //   return <RecipeBox recipeObjects={recipeObjects}></RecipeBox>;
    // }
  }
  return (
    <>
      <SearchBar
        grabSearchResults={grabSearchResults}
        SetRecipeData={SetRecipeData}
      ></SearchBar>
      <RecipeBox recipeData={recipeData}></RecipeBox>
    </>
  );
}

export default App;
