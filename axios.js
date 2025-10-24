/**
 * What axios.post() Does

Purpose: Sends data to a server (e.g., to create a new user, submit a form, post a comment).

Method: Uses HTTP POST.

Format: Automatically converts JavaScript objects to JSON before sending.
 */

console.log("ex 1");

async function createUser() {
  try {
    const res = await axios.post("https://reqres.in/api/users", {
      name: "iva",
      job: "Engineer"
    });
    console.log("User Created:", res.data);
  } catch (err) {
    console.log("Error:", err);
  }
}

createUser();







console.log("ex 2");


async function createPost() {
  const newPost = {
    title: "Axios Makes Life Easy",
    body: "No more JSON parsing!",
    userId: 7
  };

  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
  console.log("📝 New Post:", res.data);
}

createPost();


/**
 * axios.post() sends data to a URL.

The first argument → is the endpoint (https://jsonplaceholder.typicode.com/posts)

The second argument → is the data you’re sending (newPost)

⚙️ Axios automatically converts your object to JSON and sends it.
 */












/////////////////////post//////////////////////////////////////
async function sendPost() {
      try {
        // 1️⃣ Prepare the data you want to send
        const newPost = {
          title: "Learning Axios",
          body: "Axios with await is so clean!",
          userId: 1
        };

        // 2️⃣ Send the POST request and wait for the response
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);

        // 3️⃣ Once done, show the response
        console.log("✅ Post created successfully:");
        console.log(res.data);

      } catch (error) {
        // 4️⃣ Handle errors
        console.log("❌ Something went wrong:", error);
      }
    }

    // When button is clicked, call the async function
    document.getElementById("postBtn").addEventListener("click", sendPost);



///////////////////////get///////////////////////////////////////////////////////
    document.getElementById("getBtn").addEventListener("click", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    document.getElementById("output").textContent = JSON.stringify(res.data, null, 2);
    console.log("✅ GET success:", res.data);
  } catch (err) {
    console.log("❌ GET error:", err);
  }
});











/////////////flower imh api get post/////////////////////

function getflow()
{
    let flowers=[{name:"lily",src:"flower_html_js_/image/Lily_Lilium_'Citronella'_Flower.jpg"},
      {
        name:"sunflower",src:"flower_html_js_/image/Sunflower_sky_backdrop.jpg"
      }
    ];
    
    let random=Math.floor(Math.random()*flowers.length);
    let flower=flowers[random];


     document.getElementById("flowerImg").src = flower.src;
  document.getElementById("flowerName").textContent = "🌼 " + flower.name;
}









// /////////////////////////////🌻Function 2: Send favorite flower (POST)
async function sendFavoriteFlower() {
  const fav = document.getElementById("favInput").value.trim();
  const output = document.getElementById("output");

  if (!fav) {
    output.textContent = " Please enter a flower name!";
    return;
  }

  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      favorite: fav,
      date: new Date().toLocaleString()
    });

    output.textContent = "✅ Sent Successfully!\n\n" + JSON.stringify(res.data, null, 2);
  } catch (error) {
    output.textContent = "❌ Error: " + error;
  }
}

// 🎯 Buttons
document.getElementById("getBtn").addEventListener("click", getflow);
document.getElementById("postBtn").addEventListener("click", sendFavoriteFlower);