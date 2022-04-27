const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const home = fs.readFileSync("./views/music.html");
const port = process.env.PORT || 4000;
// const musicapp = path.join(__dirname, "/views");
// app.set("view engine", "html");
// app.set("views", "musicapp");
// app.use(express.static(musicapp));
app.get("/", (req, res) => {
  res.end(home);
});
app.listen(port, () => {
  console.log("sandeep", port);
});
// const http = require("http");
// const fs = require("fs");
// const home = fs.readFileSync("./views/music.html");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end(home);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
