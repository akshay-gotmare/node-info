const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New request\n`;
  if (req.url == "/favicon.ico") {
  } else {
    fs.appendFile("log.txt", log, (err, data) => {
      switch (req.url.toLowerCase()) {
        case "/":
          res.end("HomePage");
          break;
        case "/about":
          res.end("About page");
          break;
        default:
          res.end("Page not found!");
      }
    });
  }
});

myServer.listen("2024", () => {
  console.log("Server listening @ http://localhost:2024/");
});
