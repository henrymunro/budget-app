import CRUDRouteCreator from "../../modules/CRUDRouteCreator";
import { models } from "../../modules/database";
const apiRoutes = require("express").Router();

// Complexe app behaviour
require("./fileUpload")(apiRoutes);

// Basic app routes
const budgetTypeCRUDCreator = new CRUDRouteCreator(
  apiRoutes,
  "/budgetType",
  models.BudgetTypeModel
);

budgetTypeCRUDCreator.createCRUDRoutes({
  getOptions: { sort: { type: 1, subType: 1 } }
});

module.exports = apiRoutes;
