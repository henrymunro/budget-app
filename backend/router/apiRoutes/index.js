import CRUDRouteCreator from "../../modules/CRUDRouteCreator";
import { models } from "../../modules/database";
const apiRoutes = require("express").Router();

// Complexe app behaviour
require("./fileUpload")(apiRoutes);

// Basic app routes
new CRUDRouteCreator(
  apiRoutes,
  "/budgetType",
  models.BudgetTypeModel
).createCRUDRoutes({
  getOptions: { sort: { type: 1, subType: 1 } }
});

new CRUDRouteCreator(
  apiRoutes,
  "/mapping",
  models.MappingModel
).createCRUDRoutes({
  getOptions: { sort: { mapping: 1 } }
});

module.exports = apiRoutes;
