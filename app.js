const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log(request.url, request.method);
  //   console.log(response.statusCode);

  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.statusMessage = "OK";

  response.write("<h1>Main Page</h1>");
  response.write("<p>Products</p>");

  response.end();
});

server.listen(3000);

console.log("Listening port 3000");
