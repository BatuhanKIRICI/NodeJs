const fs = require("fs");

const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf-8");

const textOut = `This is what we know about avacado: ${textIn}.\nCreated on ${Date.now()}`;

console.log(textOut);

fs.writeFileSync("./1-node-farm/starter/txt/output.txt", textOut);

console.log("File written!");
