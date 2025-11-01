          
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






let user2=new user(
    {
        name:"adsd",
        email:"zxzxzx",
        age:32
    }
);


async function user_creation()
{
try{
    await user2.save()
    console.log("ok")
}



catch(err)
{
    console.log("error");
    console.log(err);
}




}
user_creation();
 


//////////////////// CREATE MULTIPLE USERS ////////////////////
async function createUsers() {
  try {
    // Array of 10 users
    const users = [
      { name: "iva", email: "iva@gmail.com", age: 21 },
      { name: "Maya", email: "maya@gmail.com", age: 25 },
      { name: "Liam", email: "liam@gmail.com", age: 30 },
      { name: "Sophia", email: "sophia@gmail.com", age: 27 },
      { name: "Noah", email: "noah@gmail.com", age: 19 },
      { name: "Olivia", email: "olivia@gmail.com", age: 22 },
      { name: "Ava", email: "ava@gmail.com", age: 35 },
      { name: "Mason", email: "mason@gmail.com", age: 40 },
      { name: "Emma", email: "emma@gmail.com", age: 29 },
      { name: "Lucas", email: "lucas@gmail.com", age: 33 }
    ];

    // Insert all at once
    await user.insertMany(users);
    console.log("🎉 10 Users Created Successfully!");
  } catch (err) {
    console.log(" Error while inserting users:");
    console.log(err);
  }
}

async function runAll() {
  await createUsers(); // create first
  
}

runAll();



/////////////////////////find user/////////////////
async function findusers()
{
    try{
let findAllusers= await user.find();

console.log(findAllusers);



let findOneuser= await user.findOne(
    {
        name:"iva"
    }
);
console.log(findOneuser);


let findgt=await user.find({age:{$gt:40}});

console.log(findgt);

    }
    catch(err)
    {
console.log(err);
    }
}



findusers();