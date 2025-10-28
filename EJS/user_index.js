let express=require("express");

let path=require("path");

let app=express();

let port=3852;


app.set("views",path.join(__dirname,"views"));


app.set("view engine","ejs");


app.get("/",(req,res)=>
{
    res.send(" it is home page")
});





app.get("/profile",(req,res)=>
{

    let user={
        name:"iva",
        age:21,
          hobbies: ["Painting", "Coding", "Cycling", "Photography"]
    };

    res.render("home_view_user",{user});
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});