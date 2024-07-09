const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New request\n`;

  // URL managed data
  const myUrl = url.parse(req.url, true);

  if (req.url == "/favicon.ico") {
  } else {
    fs.appendFile("log.txt", log, (err, data) => {
      // URL managed data
      switch (myUrl.pathname.toLowerCase()) {
        case "/":
          res.end("HomePage");
          break;
        case "/about":
          // URL managed data
          const username = myUrl.query.myName;
          console.log(username);
          res.end(`Hello, ${username}`);
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
