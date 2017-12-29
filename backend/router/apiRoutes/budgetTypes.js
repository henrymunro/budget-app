// Route point routes
import { models } from "../../modules/database";
const routeURI = "/budgetType";
const apiRouteCreator = require("../../modules/express-mongo");
const appRoutes = apiRouteCreator(models.BudgetTypeModel);

module.exports = function(apiRoute) {
  apiRoute
    .route(routeURI)
    .get((req, res, next) =>
      appRoutes.getEntries(req, res, next, {
        sort: { type: 1, subType: 1 },
        clause: { endDate: null }
      })
    )
    .post(appRoutes.postEntries);

  apiRoute.route(`${routeURI}/:id`).delete(appRoutes.deleteEntry);
};
