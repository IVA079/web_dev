// 🌸 1. Show random local flower
function getflow() {
  const flowers = [
    { name: "Lily", src: "flower_html_js_/image/Lily_Lilium_'Citronella'_Flower.jpg" },
    { name: "Sunflower", src: "flower_html_js_/image/Sunflower_sky_backdrop.jpg" }
  ];

  const random = Math.floor(Math.random() * flowers.length);
  const flower = flowers[random];

  document.getElementById("flowerImg").src = flower.src;
  document.getElementById("flowerName").textContent = "🌼 " + flower.name;
  console.log("✅ Random Flower:", flower.name);
}








// 🌺 2. Load local image via Axios GET
async function getFlowerImage() {
  const status = document.getElementById("status");
  const img = document.getElementById("flowerImg");

  try {
    const response = await axios.get("flower_html_js_/image/Corymbia_ficifolia_Flowers.jpg", {
      responseType: "blob"
    });

    const imageURL = URL.createObjectURL(response.data);
    img.src = imageURL;
    status.textContent = "✅ Flower loaded successfully!";
    console.log("Image loaded:", response);
  } catch (error) {
    status.textContent = "❌ Failed to load image!";
    console.error("Error:", error);
  }
}

// 🌻 3. Send favorite flower (POST)
async function sendFavoriteFlower() {
  const fav = document.getElementById("favInput").value.trim();
  const output = document.getElementById("output");

  if (!fav) {
    output.textContent = "❌ Please enter a flower name!";
    return;
  }

  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      favorite: fav,
      date: new Date().toLocaleString()
    });

    output.textContent =
      "✅ Sent Successfully!\n\n" + JSON.stringify(res.data, null, 2);
    console.log("POST Success:", res.data);
  } catch (error) {
    output.textContent = "❌ Error sending data!";
    console.error("Axios POST Error:", error);
  }
}

// 🌻 4. GET flower info (JSON API)
async function getFlowerInfo() {
  const output2 = document.getElementById("output2");

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    output2.textContent = JSON.stringify(res.data, null, 2);
    console.log("✅ GET info success:", res.data);
  } catch (err) {
    output2.textContent = "❌ Failed to load info!";
    console.error("GET error:", err);
  }
}

// 🎯 Buttons
document.getElementById("getBtn").addEventListener("click", getflow);
document.getElementById("postBtn").addEventListener("click", sendFavoriteFlower);
document.getElementById("getBtn2").addEventListener("click", getFlowerInfo);
document.getElementById("getImgBtn").addEventListener("click", getFlowerImage);
