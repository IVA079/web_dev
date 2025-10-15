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
let output = document.getElementById('output'); //

submitBtn.onclick = function() {
  if (nameInput.value && flowerType.value) {
    output.textContent = `Hello ${nameInput.value}! You love ${flowerType.value} because "${commentBox.value}". 🌸`;
  } else {
    output.textContent = "⚠️ Please fill in your name and choose a flower.";
  }
  commentBox.value = ""; // clear comment
};
