//! This works so far
// import React, { useEffect, useState } from "react";
// import FakeData from "./components/FakeData";
// import SearchBar from "./components/SearchBar";
// import cover from "../src/images/food.jpg";
// import { handleBreakpoints } from "@mui/system";
// function App() {
//   // States
//   const [APIData, SetAPIData] = useState("");
//   const [userSearchedResults, SetUserSearchedResults] = useState("");
//   // const [id, SetId] = useState([]);
//   //const [recipeInfo, SetRecipeInfo] = useState();

//   const apiKey = "dfee2e6419d14f5989a2c277848d8def";
//   let ids = [];

//   // useEffect(() => {
//   //   grabIds();
//   //   loadRecipes();
//   // }, []);

//   // Grabs the search results/id we need
//   const grabSearchResults = async (userInput) => {
//     const response = await fetch(
//       ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
//     );
//     const searchResultsData = await response.json();
//     SetAPIData(searchResultsData);
//     console.log("searchResultsData is", searchResultsData);

//   };

//   //! after grabSearchResults gets called I can call grabIds, then I can call loadRecipes
//   // Stores the id so we can fetch the additional info
//   const grabIds = () => {
//     for (let key in APIData.results) {
//       // SetId([...id, APIData.results[key].id]); returns an infinite rerender error
//       ids.push(APIData.results[key].id);
//       // SetId((prevState) => [...prevState, APIData.results[key].id]);
//     }
//   };
//   grabIds();
//   async function loadRecipes() {
//     for (let id of ids) {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
//       );
//       const recipeInfo = await response.json();
//       console.log("recipeInfo is", recipeInfo);
//       // SetRecipeInfo(recipeInfo);
//     }
//   }
//   loadRecipes();
//   return (
//     <>
//       <SearchBar
//         grabSearchResults={grabSearchResults}
//         SetUserSearchedResults={SetUserSearchedResults}
//       ></SearchBar>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
import RecipeBox from "./components/RecipeBox";
function App() {
  // States
  const [initialFetch, SetInitialFetch] = useState("");
  const [userSearchedResults, SetUserSearchedResults] = useState("");
  const [recipeData, SetRecipeData] = useState([]);

  const apiKey = "dfee2e6419d14f5989a2c277848d8def";
  let ids = [];

  // Grabs the search results/id we need
  const grabSearchResults = async (userInput) => {
    try {
      const response = await fetch(
        ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
      );
      const searchResultsData = await response.json();
      SetInitialFetch(searchResultsData);
      console.log("searchResultsData is", searchResultsData);
      grabIds();
    } catch (err) {
      console.log("Error is: ", err);
    }
  };

  // Stores the id so we can fetch the additional info
  const grabIds = () => {
    // const initialDataWeWant = await initialFetch
    console.log("initialFetch is: ", initialFetch);
    for (let key in initialFetch.results) {
      // SetId([...id, initialFetch.results[key].id]); returns an infinite rerender error
      ids.push(initialFetch.results[key].id);
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
        console.log("recipeInfo is", recipeInfo);
        SetRecipeData(recipeInfo);
      } catch (err) {
        console.log("Error for loadRecipes is: ", err);
      }
    }
  }

  console.log("recipeData is (outside of async)", recipeData);
  return (
    <>
      <SearchBar grabSearchResults={grabSearchResults}></SearchBar>
      <RecipeBox recipeData={recipeData}></RecipeBox>
    </>
  );
}

export default App;
