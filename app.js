// to install ALL dependencies: npm install
// to install individually:
// npm install nodemon
// npm install express
// npm install cookie-parser
// npm install express-session

// dependencies
var express = require("express");
const db = require("./models");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var app = express();

app.set('view engine', 'ejs')
// first argument-setting  second argument-value
app.set('views', 'views')

// load checkAuth.js for login authorization
const checkAuth = require("./checkAuth");

// auto generated
var jobRouter = require("./routes/job");
var usersRouter = require("./routes/users");
var apiFavoritesRouter = require("./routes/api/favorites");
var indexRouter = require("./routes/index");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// end auto generated

// custom routes
app.use(
  session({
    secret: "secret", // used to sign the cookie
    resave: false, // update session even w/ no changes
    saveUninitialized: true, // always create a session
    cookie: {
      secure: false, // true: only accept https req's
      maxAge: 2592000, // time in seconds AKA 30days
    },
  })
);
// usersRouter MUST be after app.use(session...
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/jobs", jobRouter);
app.use("/api/v1/favorites", apiFavoritesRouter);
// end custom routes


// export module as app
module.exports = app;
