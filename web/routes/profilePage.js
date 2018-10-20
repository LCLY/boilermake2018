const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");

const router = express.Router();
// router.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/html/profilePage.html"));
// });

router.get("/seeker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profilePageSeeker.html"));
});

router.get("/professional", function(req, res) {
    res.sendFile(
        path.join(__dirname, "../public/html/profilePageProfessional.html"),
    );
});

module.exports = router;
