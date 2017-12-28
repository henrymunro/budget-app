import makeFetchStateActionsTypes from "common/reducerUtils/actions/fetchStateActionTypes";

import makeSaveStateActionsTypes from "common/reducerUtils/actions/saveStateActionTypes";
import api from "common/webAPI";

const fetchBudgetTypeActionTypes = makeFetchStateActionsTypes(
  "budgetType",
  "budget/budgetTypes/"
);

const saveBudgetTypeActionTypes = makeSaveStateActionsTypes(
  "budgetType",
  "budget/budgetTypes/"
);

export const actionTypes = {
  UPDATE_NEW_BUDGET_TYPE: "budget/budgetTypes/UPDATE_NEW_BUDGET_TYPE",
  UPDATE_NEW_BUDGET_SUB_TYPE: "budget/budgetTypes/UPDATE_NEW_BUDGET_SUB_TYPE",
  // Web API
  ...fetchBudgetTypeActionTypes,
  ...saveBudgetTypeActionTypes
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

export function fetchBudgetTypes() {
  return {
    type: fetchBudgetTypeActionTypes.FETCH_BUDGETTYPE,
    payload: api.budgetType.getBudgetTypes()
  };
}

export function saveNewBudgetType(budgetType) {
  return {
    type: saveBudgetTypeActionTypes.SAVE_BUDGETTYPE,
    payload: api.budgetType.saveNewBudgetType(budgetType)
  };
}
