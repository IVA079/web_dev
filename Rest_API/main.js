let express=require("express");

let app=express();


let port=7423;


let path=require("path");


app.set("view engine","ejs");//Tell Express to use EJS templates
app.set("views",path.join(__dirname,"views"));//Tell Express where your EJS files are stored


app.use(express.static(path.join(__dirname,"public")));//for css,JS ,image static file

app.use(express.urlencoded({extended: true}));//if user fill a login form ,then convert this data json format ,easy to see. mainly , converts form data into JSON-like object


app.listen(port,()=>
{
    console.log(`listening at port :${port}`);
});

app.get("/",(req,res)=>
{
    res.send("hi");
});




let posts = [
  { id: 1, username: "college", content: "coding" },
  { id: 2, username: "tima", content: "working" },
  { id: 3, username: "eva", content: "learning REST" },
];









/**
app.get("/posts",(req,res)=>
{
res.json(posts);//res.send()
})
**/


//why res.render() instead of  res.json(posts) and  es.send(): beacuse we do not want raw data ,text
//we want to display the data in a beautiful, formatted HTML page. for this  we will use ejs template 
//res.render():full HTML page (via EJS)



/**
 * res.render() → loads and displays EJS templates (HTML pages).
public/ folder → stores CSS, JS, and images that your EJS pages use for color and style.
 */



/////////// 1st api:to get data for all posts//////////////////


app.get("/posts",(req,res)=>
{
    res.render("post",{posts});
});


//////////2nd api: crete new post/////////////////////
app.get("/posts/new",(req,res)=>
{
    res.render("form_fill_up.ejs");
});





app.post("/posts",(req,res)=>
{
     // Step 1: Destructure form dataconsole.log(req.body);
     let {username,content}=req.body;


    let newpost={
        username:username,
        content:content
    };


    console.log(newpost);

 posts.push(newpost);

})


//Create a new post in the /posts  url. collection

/**
 * when you click “Post Now”:

The browser sends a POST request to /posts

Express runs your app.post("/posts") route

You access the submitted data using req.body

You create a new post and push it into your posts array
 */