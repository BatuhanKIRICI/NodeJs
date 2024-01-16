// console.log("Hello World!");

// console.log(global);

const os = require("os");
const path = require("path");
const math = require("./math");
const { add, subtract, multiply, divide } = require("./math");

// console.log(os.version());
// console.log(os.type());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));
console.log(math.multiply(2, 5));
console.log(math.subtract(15, 8));
console.log(divide(88, 4));
