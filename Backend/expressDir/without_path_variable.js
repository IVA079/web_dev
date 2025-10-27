const express = require("express");
const app = express();


app.listen(3635, () => {
  console.log("Server is running on port 3000");
});





app.get("/r/cats", (req, res) => {
  res.send("This is the cats subreddit!");
});

app.get("/r/soccer", (req, res) => {
  res.send("This is the soccer subreddit!");
});

app.get("/r/gardening", (req, res) => {
  res.send("This is the gardening subreddit!");
});

