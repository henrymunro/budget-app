const mongoose = require("mongoose");
const debug = require("debug")("database:connecton");
const { DATABASE } = require("../../config");

debug("Loading in database connection");

let connectionURL;
if (DATABASE.LOCAL_DB) {
  connectionURL = `mongodb://${DATABASE.URL}/${DATABASE.DATABASE}`;
} else {
  connectionURL = `mongodb://${DATABASE.USERNAME}:${DATABASE.PASSWORD}@${
    DATABASE.URL
  }/${DATABASE.DATABASE}?${DATABASE.URL_PARAMS}`;
}

mongoose.connect(connectionURL);
mongoose.Promise = global.Promise;

// Test connection to DB
const db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on("connected", function() {
  debug(`Mongoose default connection open to ${DATABASE.URL}`);
});

// If the connection throws an error
db.on("error", err => {
  debug(`Error connection to the database: ${err}`);
  // throw new Error(err)
});

// When the connection is disconnected
db.on("disconnected", function() {
  debug("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", function() {
  db.close(function() {
    debug("Mongoose default connection disconnected through app termination");
    process.exit(0);
  });
});

module.exports = {
  mongoose: mongoose
};
