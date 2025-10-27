const express = require("express");
const app = express();

const port = 4000;



// --- route for all requests ---
app.use((req, res) => {
  console.log("request received");
  res.send({
    name: "apple",
    color: "red"
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
