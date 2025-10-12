
//Document Object Model — how the browser understands and manipulates your HTML



document.getElementById(mainImg);


let copy=document.getElementById("mainImg");
console.dir(document);
console.log(copy);
console.dir(copy);


console.log(copy.src);
console.log(copy.tagName);
console.log(copy.id);
//dir for object form



console.log(document.firstChild);
console.log(document.firstElementChild);


console.log(document.firstElementChild.firstElementChild);  // <head>
console.log(document.firstElementChild.lastElementChild);   // <body>
/**
  <!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello DOM!</h1>
  </body>
</html>

 
 
 *
  Document
 ├── #doctype (c)       ← special node for <!DOCTYPE html>
 └── html(ec)
      ├── head
      │    └── title
      └── body
           └── h1

 */



           //document.firstChild: It gives you the first node inside the document.
//Nodes include everything: tags, text, comments, or even the DOCTYPE.



//document.firstElementChild: It gives you the first real HTML tag, skipping things like #doctype or text nodes.




