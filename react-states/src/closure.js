/**
 * 
 * 
 * 
 * 
 * 
 * function outer()
{

let a=10;


function inner()
{

let b=20;

console.log(a+b);
}


return inner;


}
undefined
let c=outer();
undefined
c
ƒ inner()
{

let b=20;

console.log(a+b);
}
console.log(c)
VM745:1 ƒ inner()
{

let b=20;

console.log(a+b);
}
undefined
c()
VM627:12 30
undefined
c()
VM627:12 30
undefined
c();
VM627:12 30
undefined
 */









/**
 * function outer() {
  let a = 10;
  function inner() {
    a++; // increase a by 1 each time
    console.log(a);
  }
  return inner;
}

let c = outer();
c(); // 11
c(); // 12
c(); // 13

 */


//preserve the value of 'a '  inside which is 30;