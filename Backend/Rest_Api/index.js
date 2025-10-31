let express=require("express");

let app=express();

let port=3562;

app.listen(port,()=>
{
    console.log("listening to port :"+port);
    
})