const express = require("express");
const app = express();

const port = 4870;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// ---- Specific routes first ----
app.get("/cats", (req, res) => {
  console.log("CAT REQUEST!!!");
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  console.log("DOG REQUEST!!!");
  res.send("WOOF!!");
});

app.get("/", (req, res) => {
  res.send("This is the home page!");
});

