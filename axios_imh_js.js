// 🌸 Function 1: Show a random flower image (GET)
function getflow() {
  const flowers = [
    { name: "Lily", src: "flower_html_js_/image/Lily_Lilium_'Citronella'_Flower.jpg" },
    { name: "Sunflower", src: "flower_html_js_/image/Sunflower_sky_backdrop.jpg" }
  ];

  const random = Math.floor(Math.random() * flowers.length);
  const flower = flowers[random];

  // Show image and name
  document.getElementById("flowerImg").src = flower.src;
  document.getElementById("flowerName").textContent = "🌼 " + flower.name;
}










// 🌻 Function 2: Send favorite flower (POST)
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













// 🎯 Event listeners
document.getElementById("getBtn").addEventListener("click", getflow);
document.getElementById("postBtn").addEventListener("click", sendFavoriteFlower);
