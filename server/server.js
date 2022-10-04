const express = require("express");

const app = express();
// we use this because port 3000 is the default for react
const port = 5000;

app.get("/api/data", (req, res) => {
  // this would come from a database
  const recipes = [
    {
      id: 1,
      name: "Chicken pot pie",
    },
    {
      id: 2,
      name: "Pizza",
    },
    {
      id: 3,
      name: "Fried Chicken",
    },
  ];
  res.json(recipes);
});
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
