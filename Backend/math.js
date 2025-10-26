const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;


/**
 * You have two files:


////////////file 1////////////////////////////
math.js
const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;






///////////////file 2/////////////////////////
app.js
const math = require('./math');
console.log(math);


 Running this gives {} (empty object), because Node exports nothing by default.


 sol?
To make things available from math.js, you must export them.



 */


module.exports.add=add;
module.exports.PI=PI;
module.exports.square=square;

//or

//let math2={"iva2",add,PI,square};
//let math2 = { 
 // name: "iva2",
  //add: add, 
 // PI: PI, 
  //square: square 
//};

