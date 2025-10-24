// Using then()
console.log("Start");
fetch("https://swapi.tech/api/people/1/")
  .then(() => console.log("Fetched!"));
console.log("End");

//it stops only the lines inside that async function after the await.
//it does not stop other functions or parts of your program.





console.log("Line 1");

async function test() {
  console.log("Line 2");
  await fetch("https://swapi.tech/api/people/1/"); // Line 3
  console.log("Line 4");
}

test();

console.log("Line 5");
