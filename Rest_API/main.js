let express=require("express");

let app=express();


let port=7423;


let path=require("path");


app.set("view engine","ejs");//Tell Express to use EJS templates
app.set("views",path.join(__dirname,"views"));//Tell Express where your EJS files are stored


app.set(express.static(path.join(__dirname,"public")));//for css,JS ,image static file

app.use(express.urlencoded({extended: true}));//if user fill a login form ,then convert this data json format ,easy to see. mainly , converts form data into JSON-like object


app.listen(port,()=>
{
    console.log(`listening at port :${port}`);
})

app.get("/",(req,res)=>
{
    res.send("hi");
})


