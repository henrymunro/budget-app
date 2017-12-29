// @flow

import makeWebApiCRUDActionTypes from "common/reducerUtils/actions/webApiCRUDActionTypes";
import APIActionBuilder from "common/webAPI";

const budgetTypeCRUDActionTypes = makeWebApiCRUDActionTypes(
  "budgetType",
  "budget/budgetTypes/"
);

export const actionTypes = {
  UPDATE_NEW_BUDGET_TYPE: "budget/budgetTypes/UPDATE_NEW_BUDGET_TYPE",
  UPDATE_NEW_BUDGET_SUB_TYPE: "budget/budgetTypes/UPDATE_NEW_BUDGET_SUB_TYPE",
  // Web API
  ...budgetTypeCRUDActionTypes
};

export function updateNewBudgetType(input: string) {
  return {
    type: actionTypes.UPDATE_NEW_BUDGET_TYPE,
    payload: input
  };
}

export function updateNewBudgetSubType(input: string) {
  return {
    type: actionTypes.UPDATE_NEW_BUDGET_SUB_TYPE,
    payload: input
  };
}

// Web API Interface

export const budgetTypeCRUDActions = APIActionBuilder(
  "budgetType",
  budgetTypeCRUDActionTypes
);
