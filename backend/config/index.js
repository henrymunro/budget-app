const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Import specific config
const database = require("./database");
const server = require("./server");

module.exports = Object.assign({}, database, server);
