
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



/**
 * What is a Text Node?

When you write:

<h1>Hello World</h1>


the browser DOM actually sees this as:

H1
 └── #text ("Hello World")


So, every piece of visible text is wrapped in a text node (#text)
 */


let heading =document.firstElementChild.firstElementChild.firstElementChild;



let a=document.firstElementChild;
let b=a.lastElementChild;
b.style.color='blue';
b.style.color='black';











/////// get element by class name:  document.getElementsByClassName("className");

//document: whole web page
// get element by class name(): find all element with that class

//it return one  html collection ,not a single element


document.getElementsByName("abc");
console.log(document.getElementsByName("abc"));


document.getElementsByClassName('oldImg');

//HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]....found 3 object with 'oldImg' class name.

//if you want access only first object ,then what we can do?


document.getElementsByClassName('oldImg')[0];



let all_element_of_oldimg_class_name=document.getElementsByClassName('oldImg');


let totalimage=all_element_of_oldimg_class_name.length;


for(let i=0;i<totalimage;i++)
{
    all_element_of_oldimg_class_name[i].src="assets 3/creation_1.png";
    console.log(`value of image no :${i}is changed`);
}




document.getElementsByTagName("p");






///////////query selector///////////////////////////////////////////////

document.querySelector('h1');//fins first h1 element

document.querySelector('#red');//finds first element with id of red

document.querySelector('.big');// find first element with class



console.log(document.querySelector('a[href="https://www.google.com/search?q=Marvel+Comics"]'));
//find the first <a> tag (link) where (link address) equals https://www.google.com/search?q=Marvel+Comics

console.log(document.querySelector('p'));//find first paragraph tag in your web page

console.dir(document.querySelector('p'));//object form detailed of first paragraph tag

console.log(document.querySelector('img'));//Find the first <img> tag and show it in HTML form.

console.dir(document.querySelector('img'));//Find the first <img> tag and show it in js object  form.

//log : shows element  as html 
//dir: shows element as js object












///////////////query selector all///////////////////////
document.querySelectorAll('a');//Find all <a> tags (anchor/link elements) in the webpage.

let all_link=document.querySelectorAll('a');

//all_link can be think as array

all_link.forEach(funcname7);

function funcname7(e)
{
console.log(e.href);// only e will print full anchor tag html//<a href="https://google.com">Google</a>
// e.href will print link. //https://google.com/
}





// all anchor tag/link inside paragraph

let all_link_inside_paragraph2=document.querySelectorAll('p a');

let n=all_link_inside_paragraph2.length;

for(let i=0;i<n;i++)
{
    console.log(all_link_inside_paragraph2[i]);
}



for(let i of document.querySelectorAll('p a'))
{
    console.log(i);
}




//nth type

console.log(document.querySelector('img:nth-of-type(2)'));




/**
 *  What is querySelector?

 querySelector is a JavaScript DOM method that lets you find (select) one element from your webpage using a CSS selector (like id, class, or tag).

In simple words:

It tells JavaScript:
“Find the first element on this page that matches this CSS selector.”
 */






//////////////innetText/////////////////////////////////////
let a2=document.querySelector('p').innerText;
console.log(a2);





let a3=document.querySelector('p').textContent;//hidden portion..space,new line
console.log(a3);





let a4=document.querySelector('p').innerHTML;
console.log(a4);




let b2=document.querySelector('h1').innerText='change h1';

b2='<h1>ironman</h1>';


/**
 * b2='<h1>ironman</h1>';
'<h1>ironman</h1>'
b2
'<h1>ironman</h1>'//it is not showing only ironman.? so we need innerHTML
 */




document.querySelector('h1').innerHTML='<h1>modify</h1>';//now it will show modify not '<h1>modify</h1>'
//innner html works with html code//change inner html code
//inner text deal with string








document.querySelector('h2').textContent;
//'About'
document.querySelector('h2').textContent='change text content';
//'change text content'


document.querySelector('h2').textContent;
//'change text content'
document.querySelector('h2').innerHTML;
//'change text content'








///////////////////////////Manipulating attributes/////////////////////////////////
//Attributes are the extra information inside an HTML tag that describe its properties.


/**
 * Attribute Manipulation

Means → 
using JavaScript to get, set, add, or remove these HTML attributes dynamically.
 */


let img=document.querySelector('img');




//practice


let d=document.querySelector('#mainImg ');
let d2=d.id;


document.querySelector('.boxLink');
document.querySelector('.boxLink').id;///''







document.querySelector('.oldImg').className='changeoldImg';

document.querySelector('#mainImg').id='change_mainImg';



let copyimg=document.querySelector('img');


copyimg.setAttribute('id','ironman');

/**
 * index.html is just the original file stored on your computer.

When your page runs, the browser creates a live copy of it in memory (called the DOM).

Your JavaScript code changes that live copy — not the real file.

What Happened	Why
You changed id in JS	.Only affects browser memory (DOM)
index.html didn’t change	.File isn’t rewritten by JS
CSS stopped applying	.Because #ironman had no rule
Solution.	Add CSS for #ironman or use class change


 */










console.log(box_copy2);
console.log(e);

box_copy2.setAttribute('id','set_new_id');

let box_copy2=document.querySelector('.boxLink');

//box_copy2:   <a href="#" class="boxLink" >Publisher</a>


let e=box_copy2.getAttribute('id');//null

let e2=
box_copy2.setAttribute('id','set_new_id');
box_copy2.getAttribute('id');//'set_new_id'
//box_copy2 :<a href=​"#" class=​"boxLink" id=​"set_new_id">​Publisher​</a>​





////////////Silkie Chicken///// source :wikipedia:https://en.wikipedia.org/wiki/Silkie



 document.querySelectorAll('img')[1].src
  
'https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg'

document.querySelectorAll('img')[2].src

'https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-tagline-en.svg'

let img1st=document.querySelectorAll('img')[1].src;

undefined

img1stwithoutsrc=document.querySelectorAll('img')[1];



//<img class=​"mw-logo-wordmark" alt=​"Wikipedia" src=​"/​static/​images/​mobile/​copyright/​wikipedia-wordmark-en.svg" style=​"width:​ 7.5em;​ height:​ 1.125em;​">​

//img1stwithoutsrc.setAttribute('src','https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-tagline-en.svg');

 






/**
 * document.querySelector('h1'0;
VM1633:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
document.querySelector('h1');
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
let heading=document.querySelector('h1');
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
VM1762:2 Uncaught SyntaxError: Unexpected token '<'Understand this error
let heading=document.querySelector('h1');
undefined
heading
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
heading.style.color='red';
'red'
heading.textContent
'Silkie'
heading.type
undefined
heading
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading" style=​"color:​ red;​">​…​</h1>​
document.querySelector('input');
<input type=​"checkbox" id=​"vector-main-menu-dropdown-checkbox" role=​"button" aria-haspopup=​"true" data-event-name=​"ui.dropdown-vector-main-menu-dropdown" class=​"vector-dropdown-checkbox " aria-label=​"Main menu">​
let input_copy=document.querySelector('input');
undefined
input
VM2331:1 Uncaught ReferenceError: input is not defined
    at <anonymous>:1:1
(anonymous) @ VM2331:1Understand this error
input_copy
<input type=​"checkbox" id=​"vector-main-menu-dropdown-checkbox" role=​"button" aria-haspopup=​"true" data-event-name=​"ui.dropdown-vector-main-menu-dropdown" class=​"vector-dropdown-checkbox " aria-label=​"Main menu">​
input_copy.style.color='blue';
'blue'
input_copy
<input type=​"checkbox" id=​"vector-main-menu-dropdown-checkbox" role=​"button" aria-haspopup=​"true" data-event-name=​"ui.dropdown-vector-main-menu-dropdown" class=​"vector-dropdown-checkbox " aria-label=​"Main menu" style=​"color:​ blue;​">​
input_copy.type
'checkbox'
input_copy.setAttribute('type','text');
undefined
input_copy
<input type=​"text" id=​"vector-main-menu-dropdown-checkbox" role=​"button" aria-haspopup=​"true" data-event-name=​"ui.dropdown-vector-main-menu-dropdown" class=​"vector-dropdown-checkbox " aria-label=​"Main menu" style=​"color:​ blue;​">​
 */