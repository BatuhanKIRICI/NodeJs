const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
        <html>
            <head>
                <title>Main Page</title>
            </head>
            <body>
                <h1>Main Page</h1>
            </body>
        </html>`);

    response.end();
  } else if (request.url === "/products") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
        <html>
            <head>
                <title>Products</title>
            </head>
            <body>
                <h2>Products</h2>
            </body>
        </html>`);

    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write(`
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>Page not found!</h1>
            </body>
        </html>`);

    response.end();
  }
});

server.listen(3000);

console.log("Listening port 3000");
