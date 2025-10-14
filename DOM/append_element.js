//src: practice using https://en.wikipedia.org/wiki/Flower
//https://en.wikipedia.org/wiki/Rose










// 1️⃣ Create a new <div> container
let newDiv = document.createElement('div');

// 2️⃣ Create an <img> element
let roseImage = document.createElement('img');

// 3️⃣ Add image source + style
roseImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/The_Roses_of_Heliogabalus.jpg/500px-The_Roses_of_Heliogabalus.jpg";
roseImage.alt = "The Roses of Heliogabalus";
roseImage.style.width = "400px";
roseImage.style.display = "block";
roseImage.style.margin = "20px auto";
roseImage.style.border = "4px solid pink";
roseImage.style.borderRadius = "10px";

// 4️⃣ Add a caption below
let caption = document.createElement('p');
caption.textContent = "The Roses of Heliogabalus – a beautiful 19th-century painting";
caption.style.textAlign = "center";
caption.style.color = "deeppink";
caption.style.fontWeight = "bold";
caption.style.fontFamily = "Arial, sans-serif";

// 5️⃣ Combine elements
newDiv.appendChild(roseImage);
newDiv.appendChild(caption);

// 6️⃣ Finally — attach <div> to the real page (after 3rd paragraph)
let target = document.querySelectorAll('p')[2];
target.after(newDiv);









//////////////////Example 1 — appendChild():Adds new content to the end of a parent element.

//prepent(element);

let rose3=document.createElement('img');
undefined
rose3.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Maria_Amelia_of_Braganza.jpg/330px-Maria_Amelia_of_Braganza.jpg"
'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Maria_Amelia_of_Braganza.jpg/330px-Maria_Amelia_of_Braganza.jpg'
rose3.style.width="600";
'600'
rose3.style.display = "block";
'block'
rose3.style.margin = "10px auto";
'10px auto'
rose3.style.border = "3px solid purple";
'3px solid purple'
document.body.prepend(rose3);