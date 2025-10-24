//1. Convert JSON → JavaScript Object


const data2 = '{"name": "iva", "age": 21}';
const obj2 = JSON.parse(data2);
console.log(obj2.name); // 

//2. Convert JavaScript Object → JSON

const dog = { name: "Fido", owner: undefined };
const jsonString = JSON.stringify(dog);
console.log(jsonString); // {"name":"Fido","owner":null}
