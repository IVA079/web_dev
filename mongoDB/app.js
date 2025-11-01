          
/**
 * What You Were Doing Before

You were using MongoDB shell — typing commands like:

db.dogs.insertOne(...)
db.cats.find(...)
db.movies.deleteOne(...)


That means you were talking directly to the database, just to learn basic Mongo commands.

But in real life, apps don’t do that manually.




Mongoose helps Node.js apps connect to MongoDB easily and work with data using schemas, validation, and JavaScript objects — making your life easier.


 */

          
          
          const mongoose = require('mongoose');






async function main()
{
    try{
await mongoose.connect("mongodb://127.0.0.1:27017/test");

console.log("get connected")
    }

    catch(err)
    {
console.log("fail");
console.log("err"+err);
    }
}


main();


/**
 * await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
this connects your JavaScript file (Node.js) with your MongoDB database.


 */




//////////////schema//////////////////////////////

let userSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number,
    }
);

///////////model////////////////////////////

let user=mongoose.model("User",userSchema);


/**
 * const Movie = mongoose.model("Movie", movieSchema);  // → uses "movies" collection
const Student = mongoose.model("Student", studentSchema); // → uses "students" collection
const Book = mongoose.model("Book", bookSchema); // → uses "books" collection
So each model name = one collection (table).
But writing the same model name again does not duplicate it.


 */






/////////////////////Inserting//////////////////////////////////

let user1=new user(
    {
        name:"iva",
        email:"abf@gmail.com",
        age:67
    }
);




let movieSchema=new mongoose.Schema(
    {
        title:String,
        year:Number,
        rating:String
    }
);

let movie=mongoose.model('movie',movieSchema);


let movie1=new movie(
    {
        title:"qwqew",
        year:7888,
        rating:"qww"
    }
);

movie1.save();
 