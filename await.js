// Using then()
console.log("Start");
fetch("https://swapi.tech/api/people/1/")
  .then(() => console.log("Fetched!"));
console.log("End");

//it stops only the lines inside that async function after the await.
I//t does not stop other functions or parts of your program.