const fs = require("fs");

fs.readFile("./files/lorem1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
