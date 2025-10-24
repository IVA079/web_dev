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


