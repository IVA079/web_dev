
console.log("promise 1");

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("✅ Success!");
  } else {
    reject("❌ Error!");
  }
});



async function handlePromise() {
  try {
    const message = await myPromise; // waits for YOUR custom promise
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();








console.log("Custom Promise (Random number success or fail)");

const randomPromise = new Promise((resolve, reject) => {
  const num = Math.random(); // random number between 0 and 1
  console.log("Generated number:", num);

  if (num > 0.5) {
    resolve("🎉 Success! Number is greater than 0.5");
  } else {
    reject("❌ Failed! Number is 0.5 or less");
  }
});




async function checkRandom() {
  try {
    const result = await randomPromise; // waits for the result
    console.log("Using await:", result);
  } catch (error) {
    console.log("Using await:", error);
  }
}

checkRandom();


/**
 * Explanation:
Step	What Happens
1️⃣	Create a random number between 0 and 1
2️⃣	If number > 0.5 → call resolve() (success)
3️⃣	If number ≤ 0.5 → call reject() (fail)
4️⃣	.then() or await handles success
5️⃣	.catch() or try...catch handles error
 */
