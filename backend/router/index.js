const apiRoutes = require("./apiRoutes");

module.exports = function(app) {
  // App level middleware
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.use("/api", apiRoutes);
};
