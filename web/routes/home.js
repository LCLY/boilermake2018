const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const crypto = require("crypto-js/sha3");
const router = express.Router();

router.get("/professional", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homeProfessional.html"));
});

router.get("/seeker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homeSeeker.html"));
});

module.exports = router;
