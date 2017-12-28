// Route point routes
const routeURI = "/fileUpload";
const { FileUploadModel } = require("../../modules/database").models;
const apiRouteCreator = require("../../modules/express-mongo");
const appRoutes = apiRouteCreator(FileUploadModel);

module.exports = function(apiRoute) {
  apiRoute.route(routeURI).get((req, res, next) =>
    appRoutes.getEntries(req, res, next, {
      limit: 1,
      sort: { createdAt: -1 }
    })
  );

  apiRoute.route(routeURI).post((req, res, next) => {
    console.log("HERE: ", req.body);
    res.send(req.body);
  });
};
