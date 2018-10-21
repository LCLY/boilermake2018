// // dependencies
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
var sqlite3 = require("sqlite3").verbose();
var cors = require("cors");
const app = express();
const routes = require("./routes/index");
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");
const profilePage = require("./routes/profilePage");
const home = require("./routes/home");
const chat = require("./routes/chat");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", routes);
app.use("/signIn", signIn);
app.use("/signUp", signUp);
app.use("/profilePage", profilePage);
app.use("/home", home);
app.use("/chat", chat);

// open the database
let db = new sqlite3.Database("fliegen.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the fliegen database.");
});

app.post("/auth/signin/seeker", function(req, res) {
    console.log(req.body);
    var email = req.body.email;
    console.log("email: " + email);

    var password = req.body.password;
    console.log("pw: " + password);

    var userid = -1;
    let sql = "SELECT email, password FROM seeker";
    // db.serialize(function() {
    db.all(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            throw err;
        }
        // console.log("Come in db function");
        var email_exists = 0;
        rows.forEach(row => {
            if (rows.length <= 0) {
                return res.json({ result: 2 });
            }
            console.log("retrieved from database: " + row.email);
            console.log("retrieved from database: " + row.password);
            //     // if username is valid, return success with 200 status code
            if (email === row.email && password === row.password) {
                email_exists = 1;
                return res.json({ result: 0, message: "sign in success" }); //success
            } else if (email === row.email && password != row.password) {
                email_exists = 1;
                return res.json({ result: 1, message: "password incorrect" });
            }
        });
        if (email_exists === 0) {
            return res.json({ result: 2, message: "email incorrect" });
        }
    });
    // db.close(err => {
    //     if (err) {
    //         console.error(err.message);
    //     }
    //     console.log("Close the database connection.");
    // });
    // });
});

app.get("/auth/signin/seeker", function(req, res) {
    res.send(req);
});

//     var currentQuery =
//         "SELECT sid FROM seeker WHERE email='" +
//         email +
//         "' AND password='" +
//         password +
//         "'";
//     db.all(currentQuery, function(err, rows) {
//         if (err) {
//             return res.status(500).json({ message: "Internal server error" });
//         } else {
//             //if the username or password is missing return invalid data with 400 status code
//             if (rows.length <= 0) {
//                 return res.status(400).json({ message: "invalid_data" });
//             }

//             //if username is valid, return success with 200 status code
//             if (userid === rows[0].sid) {
//                 return res.status(200).json({ sid: userid });
//             } else {
//                 //if username password present but incorrect, return invalid credentials with 401 status code
//                 return res.status(401).json({ message: "invalid_credentials" });
//             }
//         }
//     });
// });

// http setup for local testing
const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
    console.log("Server running on port " + port);
});
