let express=require("express");
const { userInfo } = require("os");


let app=express();

let path=require("path");

let port=7327;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));


app.get("/",(req,res)=>
{
    res.render("home");
});





app.get("/ig/:username",(req,res)=>
{
    let instadata=require("./data.json")//all data



   let extract_username_from_url=req.params.username;



    console.log(instadata);

    res.render("instagram",{data:instadata[extract_username_from_url]});
});




app.get("/hello",(req,res)=>
{
    res.send("hello");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});














