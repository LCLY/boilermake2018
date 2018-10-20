const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const crypto = require("crypto-js/sha3");
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
});
router.get("/professional", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/chatProfessional.html"));
});
router.get("/seeker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/chatSeeker.html"));
});

module.exports = router;
