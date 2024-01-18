const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("index.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);

      response.end();
    });
  } else if (request.url === "/products") {
    fs.readFile("products.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);

      response.end();
    });
  } else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(html);

      response.end();
    });
  }
});

server.listen(3000);

console.log("Listening port 3000");
