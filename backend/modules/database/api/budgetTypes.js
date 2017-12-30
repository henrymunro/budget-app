// @flow

import BudgetTypesModel from "../models/budgetTypesModel";

import type { BudgetTypeType } from "../../../../src/features/budgetTypes";

const debug = require("debug")("database:api-budgetTypes");

export const getDefault = async (): BudgetTypeType => {
  debug("Getting default type");
  let output = await BudgetTypesModel.find({
    type: "Other",
    subType: "Other"
  });
  if (output.length === 0) {
    output = await BudgetTypesModel.create({
      type: "Other",
      subType: "Other"
    });
  }
  return output[0];
};
