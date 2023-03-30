// server.js
const next = require("next");
const express = require("express");
const server = express();
// server.use(express.json()); // for json
// server.use(express.urlencoded({ extended: true })); // for form data

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

app.prepare().then(async () => {
  server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

  server.all("/api/:path*", function (req, res, next) {
    // console.log(req.headers["authorization"], "api");
    // console.log(req.headers);
    next();
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
