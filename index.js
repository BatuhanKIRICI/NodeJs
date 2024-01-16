const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

console.log("Hello...");

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you pal!",
  (err) => {
    if (err) throw err;
    console.log("Writing completed!");

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\nTesting text!",
      (err) => {
        if (err) throw err;
        console.log("Append completed!");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename completed!");
          }
        );
      }
    );
  }
);

/* fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "Testing text!",
  (err) => {
    if (err) throw err;
    console.log("Append completed!");
  }
); */

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
