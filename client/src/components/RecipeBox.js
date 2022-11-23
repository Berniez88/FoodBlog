import React from "react";

function RecipeBox({ recipeData }) {
  // const data = await recipeData
  console.log("testing recipeData", recipeData);
  return (
    <>
      <h1>Hello this is RecipeBox</h1>
      <h1>{recipeData.title}</h1>
    </>
  );
}
export default RecipeBox;
