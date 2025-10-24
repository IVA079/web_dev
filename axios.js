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


async function createUser2() {
  try {
    axios.post("https://example.com/api/data",
  { name: "Eva" },
  {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer token123"
    }
  }
);
  } catch (err) {
    console.log("Error:", err);
  }
}

createUser2();



