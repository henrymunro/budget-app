const express = require("express");
// const cookieParser = require('cookie-parser')
const rand = require("random-key");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
// const favicon = require("serve-favicon");
const helmet = require("helmet"); // Security Module
const app = express();
const path = require("path");
var morgan = require("morgan");

// http logging
app.use(morgan("combined"));

// view engine setup
app.set("views", path.join(__dirname, "/../build"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    keys: [0, 0, 0, 0, 0].map(val => rand.generate()),
    maxAge: 24 * 60 * 60 * 1000
  })
);
// Static routing
const staticRouting = express.static(path.join(__dirname, "/../build"));
app.use(staticRouting);

// Loads Routes
require("./router")(app);
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/../build/index.html"))
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send({
      message: err.message,
      error: err,
      stack: err.stack
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
    message: err.message,
    error: {}
  });
});

module.exports = app;
