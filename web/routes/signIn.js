const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const crypto = require("crypto-js/sha3");
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/preLogin.html"));
});

router.get("/seeker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signInSeeker.html"));
});

router.get("/professional", function(req, res) {
    res.sendFile(
        path.join(__dirname, "../public/html/signInProfessional.html"),
    );
});

router.post("/seeker", function(req, res) {
    var data = {
        email: req.body.email,
        password: req.body.password,
    };

    var options = {
        uri: "http://localhost:3000/auth/signin/seeker",
        json: data,
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };

    request(options, function(error, response) {
        if (response) {
            res.send(response.body);
            console.log(response.body);
        }
        return;
    });
});

router.post("/professional", function(req, res) {
    // var body = {
    //     result: 0,
    // };
    // res.send(body);
    var data = {
        email: req.body.email,
        password: req.body.password,
    };
    console.log(data);

    var options = {
        uri: "http://localhost:3000/auth/signin/professional",
        json: data,
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };
    request(options, function(error, response) {
        if (response) {
            res.send(response.body);
        }
        return;
    });
});

module.exports = router;
