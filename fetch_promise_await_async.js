
async function getJoke() {
  try {
    
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }  
    });

   
    const data = await response.json();

 
    console.log("Here’s your joke :");
    console.log(data.joke);




  } catch (error) {
  
    console.log("Something went wrong ", error);
  }
}


getJoke();



/**
 1. A Promise is a special JavaScript object that represents something that will finish in the future —
it can either succeed ✅or fail .



2.Some built-in JavaScript functions (like fetch() or response.json()) already return a Promise automatically.

3.await just waits for these Promise objects to finish.

const response = await fetch(...); // fetch returns a Promise
const data = await response.json(); // response.json returns a Promise




 */







console.log(" if promise get rejected");
//If the URL is bad, or there’s no internet connection, the Promise becomes rejected.

async function getdata3()
{
try
{
let response2=await fetch("https://wrong-url-example.com/");
let data=await response2.json();
console.log(data);
}
catch(eeee)
{
    console.log(" error",eeee);
}
}

getdata3()