// // dependencies
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes/index");
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");
const profilePage = require("./routes/profilePage");
const home = require("./routes/home");
const chat = require("./routes/chat");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", routes);
app.use("/signIn", signIn);
app.use("/signUp", signUp);
app.use("/profilePage", profilePage);
app.use("/home", home);
app.use("/chat", chat);

// http setup for local testing
const httpServer = http.createServer(app);
const port = 80;

httpServer.listen(port, () => {
    console.log("Server running on port " + port);
});

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
