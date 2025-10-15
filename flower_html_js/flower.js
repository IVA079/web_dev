///When user clicks a thumbnail -> change main image


//way to get the images inside .gallery


let gallery = document.querySelectorAll('.gallery')[0];
let imgs = gallery.querySelectorAll('img');


let mainimg=document.getElementById('mainImage');



let index = 0;
mainimg.onclick = function() {
  index++;
  if (index >= imgs.length) index = 0;
  mainimg.src = imgs[index].src;
};







