// // dependencies
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes/index");
const signIn = require("./routes/signIn");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", routes);
app.use("/signIn", signIn);

// http setup for local testing
const httpServer = http.createServer(app);
const port = 3000;

httpServer.listen(port, () => {
    console.log("Server running on port " + port);
});
