const fs = require("fs");
const express = require("express");
const PORT = "2024";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home page!");
});

app.get("/about", (req, res) => {
  res.send("Here is the about page. \n Welcome, " + req.query.myName);
});

app.listen(PORT, () => {
  console.log("Server activated!");
});
