const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const crypto = require("crypto-js/sha3");
const router = express.Router();

router.get("/seeker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signInSeeker.html"));
});

router.get("/professional", function(req, res) {
    res.sendFile(
        path.join(__dirname, "../public/html/signInProfessional.html"),
    );
});

router.post("/seeker", function(req, res) {
    //     var data = {
    //         email: req.body.email,
    //         password: crypto(req.body.email + req.body.password).toString(),
    //     };
    //     console.log(data);
    //     var options = {
    //         uri: "http://localhost:8080/user/login",
    //         json: data,
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };
    //     request(options, function(error, response) {
    //         // global.cookie = response.headers["set-cookie"];
    //         if (response) {
    //             res.send(response.body);
    //         }
    //         return;
    //     });
});

router.post("/professional", function(req, res) {
    //     var data = {
    //         email: req.body.email,
    //         password: crypto(req.body.email + req.body.password).toString(),
    //     };
    //     console.log(data);
    //     var options = {
    //         uri: "http://localhost:8080/user/login",
    //         json: data,
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };
    //     request(options, function(error, response) {
    //         // global.cookie = response.headers["set-cookie"];
    //         if (response) {
    //             res.send(response.body);
    //         }
    //         return;
    //     });
});

module.exports = router;
