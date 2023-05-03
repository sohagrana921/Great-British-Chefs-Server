const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const newest = require("./data/newestrecipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment-10 server is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/newestrecipes", (req, res) => {
  res.send(newest);
});

app.listen(port, () => {
  console.log(`Assignment-10 API is running on port: ${port}`);
});
