/**
 * You’re importing the entire Figlet module from your node_modules folder.

So now, figlet is an object that contains functions (methods) that the package provides.
 


figlet variable:
The object containing all the exported functions (method)



*/


let figlet=require("figlet");


console.dir(figlet);


figlet.text("Hello!", (err, data) => {
  console.log(data);
});




const output = figlet.textSync("Sync Example", { font: "Ghost" });
console.log(output);





figlet.fonts((err, fonts) => {
  console.log(fonts);
});




console.log(figlet.fontsSync());
