const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);
  console.log(response.statusCode);
  response.end();
});

server.listen(3000);

console.log("Listening port 3000");
