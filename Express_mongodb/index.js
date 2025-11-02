
//express → to create your web server

let express=require('express');

let app=express();

let path=require('path');
app.use(express.static(path.join(__dirname,"public")));//for css,JS ,image static file

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.listen(3286,()=>
{
    console.log(" app is listening");
});



  const mongoose = require('mongoose');

let chat=require("./models/chat.js");








async function main()
{
    try{
        
await mongoose.connect("mongodb://127.0.0.1:27017/ChatApp");

console.log("get connected")
    }

    catch(err)
    {
console.log("fail");
console.log("err"+err);
    }
}


main();



app.get('/dog', (req, res) => {
  res.send('WOOF');
});




let chat1=new chat (
    {
        from:"bob",
        to:"tamsi",
        msg:"qerrtetrytuyu",
        create_at:new Date()
    }
)



async function user_creation()
{
try{
  chat1.save();
    console.log("ok")
}



catch(err)
{
    console.log("error");
    console.log(err);
}




}
user_creation();



/////////get all chats//////////////////////

app.get("/chats",async(req,res)=>
{
    try{
   let chats= await chat.find();
   console.log("get all gata");
   res.render("index.ejs",{chats});
    }
    catch(err)
    {
console.log("fail");
    }
})