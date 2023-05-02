const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
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

// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews)
// })

// app.get('/categories/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (id === 0) {
//         res.send(news)
//     }
//     else {
//         const categoryNews = news.filter(n => parseInt(n.category_id) === id);
//         res.send(categoryNews)
//     }

// })

app.listen(port, () => {
  console.log(`Assignment-10 API is running on port: ${port}`);
});
