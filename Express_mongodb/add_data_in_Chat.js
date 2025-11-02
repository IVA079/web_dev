let mongoose=require('mongoose');

let chat=require('./models/chat.js');//blue print

//using mongoose insert data in yor chat model/table



/**
 * This file is responsible for connecting and running actions
(like inserting, reading, or deleting documents).
 */


//as we are adding data so we need connection




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







const seedChats = [
  {
    from: "Alice",
    to: "Bob",
    msg: "Hey Bob! How are you?",
    create_at: new Date()
  },
  {
    from: "Bob",
    to: "Alice",
    msg: "I’m good, Alice! How about you?",
    create_at: new Date()
  },
  {
    from: "Tamsi",
    to: "Eva",
    msg: "Are you free tonight?",
    create_at: new Date()
  },
  {
    from: "Eva",
    to: "Tamsi",
    msg: "Yes, let’s catch up after dinner!",
    create_at: new Date()
  },
  {
    from: "Charlie",
    to: "David",
    msg: "Don’t forget the meeting at 8 AM.",
    create_at: new Date()
  }
];



chat.insertMany(seedChats)
.then((res)=>
{
    console.log("ok");
    console.log(res);
})
.catch((err)=>
{
    console.log("fail"+err);
})