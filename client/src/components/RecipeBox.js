import { TableRow } from "@mui/material";
import React from "react";

//TODO: Figure out how I can grab/store all the data from the recipeData.extendedIngredients property and display it
function RecipeBox({ recipeData }) {
  console.log("testing recipeData", recipeData);
  //! once recipeData is populated we can run our code
  console.log("the length is: ", recipeData.extendedIngredients.length);
  if (recipeData.length === 2) {
    console.log("inside of if");
    let ingredients = [];
    for (let i = 0; i < recipeData[i].length; i++) {
      console.log("hello");
    }
  }

  const currentRow = recipeData.map((recipe) => {
    return (
      <div key={recipe.id}>
        <h4>{recipe.title}</h4>
        <h4>{recipe.healthScore}</h4>
        <img src={recipe.image} alt="" />
        <h4>Ingredients: {}</h4>
      </div>
    );
  });
  return (
    <>
      <h1>Hello this is RecipeBox</h1>
      {currentRow}
    </>
  );
}
export default RecipeBox;
