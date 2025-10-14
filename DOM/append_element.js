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
