/**
 * Where to install Express (and EJS)

You must install them in the same folder as your JS file,
 */





const express = require("express");
const path = require("path");

const app = express();
const port = 8975;

// tell Express exactly where your "views" folder is
app.set("views", path.join(__dirname, "views"));

//  tell Express to use EJS
app.set("view engine", "ejs");

// simple route
app.get("/", (req, res) => {
  res.render("view_home");
  res.send("hi");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log("Views directory:", path.join(__dirname, "views"));
});
