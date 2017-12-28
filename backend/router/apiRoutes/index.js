const apiRoutes = require("express").Router();

// Application Info routes
require("./fileUpload")(apiRoutes);

module.exports = apiRoutes;
