
//express → to create your web server

let express = require('express');

let app = express();

let path = require('path');

app.use(express.static(path.join(__dirname, "public")));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3286, () => {
    console.log(" app is listening");
});


const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const mongoose = require('mongoose');

let chat = require("./models/chat.js");








async function main() {
    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/ChatApp");

        console.log("get connected")
    }

    catch (err) {
        console.log("fail");
        console.log("err" + err);
    }
}


main();



app.get('/dog', (req, res) => {
    res.send('WOOF');
});




let chat1 = new chat(
    {
        from: "bob",
        to: "tamsi",
        msg: "qerrtetrytuyu",
        create_at: new Date()
    }
)



async function user_creation() {
    try {
        chat1.save();
        console.log("ok")
    }



    catch (err) {
        console.log("error");
        console.log(err);
    }




}
user_creation();



/////////get all chats//////////////////////

app.get("/chats", async (req, res) => {
    try {
        let chats = await chat.find();

        console.log("get all gata");
        res.render("index.ejs", { chats });
    }
    catch (err) {
        console.log("fail");
    }
})





//////////new and create/////////////////////////
app.get("/chats/new", (req, res) => {
    res.render("new_chat.ejs");
})


app.use(express.urlencoded({ extended: true }));

app.post("/chats", async (req, res) => {


    try {
        let { from, to, msg } = req.body;
        let newChat = new chat(
            {
                from: from,
                to: to,
                msg: msg,
                create_at: new Date()

            }
        );


        await newChat.save();

        console.log("added chat successfully");
        res.redirect("/chats");


    }
    catch (err) {
        console.log(err);

    }
});





////////////update route////////////////////////////

//when you click on edit btn,the browser send get request to server at ' /chat/:id/edit' address.now get method will perfrom its task

app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;

        let chat_to_edit = await chat.findById(id);

        res.render("edit_chat.ejs", { chat_to_edit });

    }
    catch (err) {
        res.send("error");
    }
});




//after clicking on submit ,a put req will be gone to server at '/chats/:id"' address
//how server handle this put req?

app.put("/chats/:id", async (req, res) => {


    try {



        let { id } = req.params;

        let { msg: newms } = req.body;
        let updatedchat = await chat.findByIdAndUpdate(id, { msg: newms }
           // { runValidators: true, new: true }
        );

        console.log("chat updated");
        res.redirect("/chats");







    }
    catch (err) {
        console.log("chat is not updated");
    }




})
