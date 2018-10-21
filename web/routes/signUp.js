const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const crypto = require("crypto-js/sha3");
const router = express.Router();

router.get("/seeker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signUpSeeker.html"));
});

router.get("/professional", function(req, res) {
    res.sendFile(
        path.join(__dirname, "../public/html/signUpProfessional.html"),
    );
});

router.post("/seeker", function(req, res) {
    var body = {
        result: 0,
    };

    res.send(body);
    // var data = {
    //     email: req.body.email,
    //     password: crypto(req.body.email + req.body.password).toString(),
    // };
    // console.log(data);
    // var options = {
    //     uri: "http://localhost:8080/something",
    //     json: data,
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // };
    // request(options, function(error, response) {
    //     // global.cookie = response.headers["set-cookie"];
    //     if (response) {
    //         res.send(response.body);
    //     }
    //     return;
    // });
});

router.post("/professional", function(req, res) {
    var body = {
        result: 0,
    };

    res.send(body);
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
