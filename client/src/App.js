import React, { useState } from "react";
import FakeData from "./components/FakeData";
import SearchBar from "./components/SearchBar";
import cover from "../src/images/food.jpg";
function App() {
  // States
  const [APIData, SetAPIData] = useState();
  const [id, SetId] = useState([]);
  const [recipeInfo, setRecipeInfo] = useState();

  // State used to retrieve the userInput in the child component SearchBar
  const [userSearchedResults, setUserSearchedResults] = useState("");
  const apiKey = "0b0d63fd7ff5490a872ecf609d11b125";

  // Function that calls the API
  // const api = (userInput) => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => SetAPIData(data))
  //     .catch((err) => {
  //       console.log(`error: ${err}`);
  //     });
  // };
  //! Testing code
  // basically I want to make an api request to search what the user entered, and get the recipe back from that specific id

  const api = (userInput) => {
    fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${userInput}&number=2`
    )
      .then((res) => res.json())
      .then((data) => {
        // SetId();
        console.log("data is: ", data);
        // grabId();
        return SetAPIData(data);
      })
      .catch((err) => {
        console.log("error is :", err);
      });
    console.log("APIDATA", APIData); // the array of obj for results
  };

  //! I need to figure out how to iterate thru the obj and store both IDs
  const grabId = () => {
    for (let key in APIData.results) {
      console.log("key is: ", key, "api data is: ", APIData.results[key]);
      // SetId((prevState) => [...prevState, APIData.results[key].id]);
    }
  };

  const searchedRecipeInfo = (recipes) => {
    for (let i = 0; i < 1; i++) {
      console.log(recipes[i]);
    }
    // fetch(
    //   `https://api.spoonacular.com/recipes/${id}}/information?apiKey=${apiKey}`
    // )
    //   .then((res) => {
    //     res.json();
    //   })
    //   .then((data) => {
    //     setRecipeInfo(data);
    //   })
    //   .catch((err) => {
    //     console.log("error is :", err);
    //   });
  };

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
