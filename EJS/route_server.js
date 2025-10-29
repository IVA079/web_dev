let express=require("express");


let path=require("path");


let app=express();


let port=5441;


//This is middleware — a helper function that runs before your routes.
/**
 * If the client sends data (like from a <form>), convert that form data into a JavaScript object, so I (Express) can understand it.”
 */

//req.body = { name: "iva", email: "iva@gmail.com" }
//let { name, email } = req.body;

app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");


app.set("views",path.join(__dirname,"views"));


app.get("/",(req,res)=>
{
res.render("get_form");

console.log("GET / requested");
})



app.post("/",(req,res)=>
{
    let {name,email}=req.body;
    
    res.render("post_form",{name,email});

    console.log("POST /submit requested");
    console.log("form data",req.body);


})





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});