const express = require("express");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// All Categories are displaying
app.get("/categories", (req, res) => {
  res.send(categories);
});

// Single Category showing
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;

  if (id === "0") {
    res.send(news);
  } else {
    const selectedCategories = news.filter((n) => n.category_id === id);
    res.send(selectedCategories);
  }
});

// All News are displaying
app.get("/news", (req, res) => {
  res.send(news);
});

// Single News Showing
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
