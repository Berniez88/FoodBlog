import React, { useEffect, useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
import RecipeBox from "./components/RecipeBox";
function App() {
  // States
  const [initialFetch, SetInitialFetch] = useState();
  const [recipeData, SetRecipeData] = useState([]);
  const apiKey = "dfee2e6419d14f5989a2c277848d8def";

  //! ideas: I can store grabSearchResults and grabIds in one function and chain them/ I can also then put it in an useEffect
  let ids = [];
  let recipeObjects = [];
  // Grabs the search results/id we need
  const grabSearchResults = async (userInput) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
    )
      .then((response) => response.json())
      .then((initialFetchData) => {
        SetInitialFetch(initialFetchData.results);
        grabIds(initialFetchData.results);
      });
  };

  // Stores the id so we can fetch the additional info
  const grabIds = (initialFetchDataResults) => {
    // const initialDataWeWant = await initialFetch
    console.log("initialFetchDataResults is: ", initialFetchDataResults);
    for (let key in initialFetchDataResults) {
      // SetId([...id, initialFetch.results[key].id]); returns an infinite rerender error
      ids.push(initialFetchDataResults[key].id);
      // SetId((prevState) => [...prevState, initialFetch.results[key].id]);
    }
    loadRecipes();
  };
  // Use the ids of the recipe we searched to get additional info on the recipe
  async function loadRecipes() {
    for (let id of ids) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        const recipeInfo = await response.json();
        recipeObjects.push(recipeInfo);
        // SetRecipeData(recipeInfo);
        console.log(recipeObjects);
      } catch (err) {
        console.log("Error for loadRecipes is: ", err);
      }
    }
    // console.log("recipeObjects is: ", recipeObjects);
  }

  console.log("recipeObjects is outside of the func: ", recipeObjects);

  let recipeResults;
  console.log("okay now recipe is:", recipeObjects);
  if (recipeObjects.length === 0) {
    recipeResults = <h1>No recipes searched</h1>;
  } else {
    {
      recipeResults = <RecipeBox recipeObjects={recipeObjects}></RecipeBox>;
    }
  }
  return (
    <>
      <SearchBar grabSearchResults={grabSearchResults}></SearchBar>
      {recipeResults}
      {/* {recipeObjects.length && (
        <RecipeBox recipeObjects={recipeObjects}></RecipeBox>
      )} */}
    </>
  );
}

export default App;
