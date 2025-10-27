let express=require("express");

console.log(express());
console.log("......................next line ");

console.log(express);



console.log("line 10");
console.log(" type of express");
console.log(typeof express);

console.log(" type of express()");
console.log( typeof express());



let app=express();

///////////////http://localhost:3000 request/////////////

let port=3000;
app.listen(port,()=>
{
    console.log(`app is listening on port ${port}`);
})


/**
 * open your browser and go to:
///request
http://localhost:3000


You’ll see:

Cannot GET /


That means:

The server is working

But there’s no route defined yet for /
(so Express returns a default 404 error).
 */



/////////response////////////////
console.log("respose");



app.use((req, res, next) => {
  console.log(req.method, req.url); // Logs GET, POST, PATCH, etc.
  next(); // Passes control to the next route
});



app.use('/admin', (req, res) => {
  res.send('Admin section');
});



app.use((req,res)=>
{
    console.log(" request received");
    res.send({
        name:"apple",
        color:"red"
    });
});





app.use('/fruit', (req, res) => {
  res.send({ name: "apple", color: "red" });
});
