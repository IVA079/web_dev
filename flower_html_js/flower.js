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
