// Route point routes
import { databaseApi, models } from "../../modules/database";
const routeURI = "/fileUpload";
const apiRouteCreator = require("../../modules/express-mongo");
const appRoutes = apiRouteCreator(models.FileUploadModel);
const debug = require("debug")("routes:fileUpload");
const { SERVER: { SEND_STACK } } = require("../../config");

module.exports = function(apiRoute) {
  apiRoute.route(routeURI).get((req, res, next) =>
    appRoutes.getEntries(req, res, next, {
      sort: { createdAt: -1 }
    })
  );

  apiRoute.route(routeURI).post((req, res, next) => {
    databaseApi.fileUpload
      .saveNewFileFlow(req.body)
      .then(response => {
        debug("Sucessfully saved new file upload");
        res.send(response);
      })
      .catch(err => {
        debug("Error saving new file upload: ", err);
        res.status(500).send(SEND_STACK ? err : "Internal Server Error");
      });
  });
};
