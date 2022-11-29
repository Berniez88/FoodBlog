import { TableRow } from "@mui/material";
import React from "react";

function RecipeBox({ recipeData }) {
  console.log("testing recipeData", recipeData);
  const currentRow = recipeData.map((recipe) => {
    return (
      <>
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <h4>{recipe.healthScore}</h4>
        </div>
      </>
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
