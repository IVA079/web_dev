          
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







//////////////schema//////////////////////////////