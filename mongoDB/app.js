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