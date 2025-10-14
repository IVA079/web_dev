

///////parent and child: ///a parent can have many child .but a child  have one parent
console.log("navigation");
document.querySelector('b');





let e6=document.querySelector('b').parentElement;

e7=e6.parentElement;



e6.childElementCount;
e6.children;

e6.children[1].parentElement;


//////////////sibling////////////////////////////


/**
 * <p> (parent)
 ├── <b>Spider-Man</b>   ← boldTag
 │       ↓ nextElementSibling
 ├── <a>Marvel Comics</a> ← firstLink
 │       ↑ previousElementSibling
 │       ↓ nextElementSibling
 └── <a>Amazing Fantasy</a>

 */

let bold3=document.querySelectorAll('b')[3];

let firstLink = document.querySelectorAll("a")[7];

let childrenall=boldTag.children;

let p2=document.querySelectorAll('p')[2];

console.log(bold3.nextElementSibling);     
//  <a href="#">Marvel Comics</a>

console.log(firstLink.previousElementSibling);
//  <b>Spider-Man</b>

console.log(firstLink.nextElementSibling);
//  <a href="#">Amazing Fantasy</a>

console.log(boldTag.previousElementSibling);
//  null (no element before <b>)
