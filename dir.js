const fs = require("fs");

if (!fs.existsSync("./new1")) {
  fs.mkdir("./new1", (err) => {
    if (err) throw err;
    console.log("Directory created!");
  });
}
