///When user clicks a thumbnail -> change main image


//way to get the images inside .gallery


let gallery = document.querySelectorAll('.gallery')[0];
let imgs = gallery.querySelectorAll('img');


let mainimg=document.getElementById('mainImage');



let index = 0;
////number of  function calling = how many time you click on main images
mainimg.onclick = function() {
  index++;
  if (index >= imgs.length){
    index = 0;
}
else
{
  mainimg.src = imgs[index].src;
}

};






/////example 2
let mainImage = document.getElementById('mainImage');
let thumbnails = document.querySelectorAll('.gallery img');


for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function() {
    
    mainImage.src = thumbnails[i].src;
    mainImage.alt = thumbnails[i].alt;

 
    for (let j = 0; j < thumbnails.length; j++) {
      thumbnails[j].style.border = "2px solid #ccc";
    }
    thumbnails[i].style.border = "3px solid hotpink";
  };
}



///explanation
/** 
thumbnails[0].onclick = function() {
    
    mainImage.src = thumbnails[0].src;
    mainImage.alt = thumbnails[0].alt;
}

thumbnails[1].onclick = function() {
    
    mainImage.src = thumbnails[1].src;
    mainImage.alt = thumbnails[1].alt;
}

**///when you click on thumbnails[0],function will change main image to thumbnails[0] image .same for all
//for previous ex1  if we use loop will it create overwrite problem and last i =7 so maing image will not be converted to gallery image









//click on button
let a=document.querySelectorAll('p');


let p_out=document.querySelectorAll('p')[4];

let btn=document.querySelectorAll('button')


let btn4=document.querySelectorAll('button')[4];


function click_on_button()
{
    p_out.textContent="🌸 ";

}

//btn4.onclick=click_on_button();







let nameInput = document.getElementById('name');
let flowerType = document.getElementById('flowerType');
let commentBox = document.getElementById('comment');
let submitBtn = document.getElementById('submitBtn');


submitBtn.onclick = function() {
  if (nameInput.value && flowerType.value) {
    p_out.textContent = `Hello ${nameInput.value}! You love ${flowerType.value} because "${commentBox.value}". 🌸`;
  } else {
    p_out.textContent = "⚠️ Please fill in your name and choose a flower.";
  }
  commentBox.value = ""; // clear comment
};







/////on mouse enter:
/**
 * What is onmouseenter?

The mouseenter event happens when your mouse cursor enters (touches) an element.
It triggers only once when you move the cursor into that element.
 */

 let flowerTitle = document.getElementById("flowerTitle");

  flowerTitle.onmouseenter = function() {
    flowerTitle.style.color = "hotpink";
    flowerTitle.textContent = "🌼 You hovered over the flower!";
  };













  /////////////keyboard event////////////////////
  // Select input elements
   let downCount = 0;
    let upCount = 0;
const nameInput2 = document.getElementById("name");
const commentInput = document.getElementById("comment");
const output = document.getElementById("p_for_output ");

// 1️⃣ When a key is pressed down
nameInput2.addEventListener("keydown", function(event) {
console.log(  output.textContent = `🟣 keydown: You pressed "${event.key}"`);


//console.log(downCount++);
  output.style.color = "purple";
});

// 2️⃣ When a key that makes a letter/number is pressed (not used much now)
//nameInput2.addEventListener("keypress", function(event) {
  //output.textContent = `🔵 keypress: You typed "${event.key}"`;
  //output.style.color = "blue";
//});

// 3️⃣ When the key is released
//nameInput2.addEventListener("keyup", function(event) {
  //console(output.textContent = `🟢 keyup: You released "${event.key}"`);
  //console.log( upCount++);
  //output.style.color = "green";
//});




// Optional: Trigger on comment box too
commentInput.addEventListener("keydown", function(event) {
  

  console.log(output.textContent = `🟢 keyup: You released "${event.key}"`);
  console.log( upCount++);


  output.textContent = `✏️ You are typing in the comment box: "${event.key}"`;
  output.style.color = "#b30059";
});
