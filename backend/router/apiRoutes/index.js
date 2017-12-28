const apiRoutes = require("express").Router();

// Application Info routes
require("./fileUpload")(apiRoutes);
require("./budgetTypes")(apiRoutes);

module.exports = apiRoutes;
