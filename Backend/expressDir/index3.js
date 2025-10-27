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



let port=3000;
app.listen(port,()=>
{
    console.log(`app is listening on port ${port}`);
})
