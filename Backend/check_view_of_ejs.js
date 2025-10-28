let express = require("express");

let app = express();

let port = 8973;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Route 1: Render EJS template
app.get("/", (req, res) => {
  res.render("home"); // looks for views/home.ejs
});

//view engine": Which template engine to use (EJS, Pug, etc.)





app.get("/hello", (req, res) => {
  res.send(" hi"); // looks for views/home.ejs
});