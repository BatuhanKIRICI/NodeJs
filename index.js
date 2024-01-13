const fs = require("fs");

// Synchronous

/* const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf-8");

const textOut = `This is what we know about avacado: ${textIn}.\nCreated on ${Date.now()}`;

console.log(textOut);

fs.writeFileSync("./1-node-farm/starter/txt/output.txt", textOut);

console.log("File written!"); */

// Asynchronous

fs.readFile("./1-node-farm/starter/txt/start.txt", "utf-8", (err, data1) => {
  if (err) console.log("Error!");
  fs.readFile(
    `./1-node-farm/starter/txt/${data1}.txt`,
    "utf-8",
    (err, data2) => {
      //   console.log(data2);
      fs.readFile(
        "./1-node-farm/starter/txt/append.txt",
        "utf-8",
        (err, data3) => {
          console.log(data3);
          fs.writeFile(
            "./1-node-farm/starter/txt/final.txt",
            `${data2}\n${data3}`,
            "utf-8",
            (err) => {
              console.log("Your file has been written!");
            }
          );
        }
      );
    }
  );
});
console.log("Will read the file!");
