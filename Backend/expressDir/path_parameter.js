const express = require("express");
const app = express();



app.listen(5673, () => {
  console.log("Server is running on port 5673");
});


app.get("/", (req, res) => {
  res.send("Hello from my server!");
});



//1. What We Had Before (Direct Match Routes)
app.get("/cats", (req, res) => {
  res.send("Meow! This is the cats page.");
});



/**
 * What We Want (Pattern Routes)

Real websites like Reddit have URLs like:

reddit.com/r/soccer
reddit.com/r/cats
reddit.com/r/mightyharvest


There are thousands of these — we can’t make one route per subreddit!
So we use a pattern route — one that changes dynamically.
 */



app.get("/r/:subreddit",(req,res)=>
{
    console.log(req.params);

    let subreddit=req.params.subreddit;

    res.send(`the subreddit is ${subreddit}`);

});


/**
 * req.params=	The whole object	={ subreddit: "cats" }
req.params.subreddit=	The value inside that object	="cats"
 */




app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Viewing post ${postId} on the ${subreddit} subreddit`);
});








