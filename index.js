const fs = require("fs");

fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Hello...");

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
