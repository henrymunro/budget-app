// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";

export function getBudgetTypeReducer(state: State) {
  return state.getIn(["budgetType", "budgetTypeReducer"]);
}

export function getNewBudgetType(state: State): string {
  return getBudgetTypeReducer(state).newBudgetType;
}

export function getNewBudgetSubType(state: State): string {
  return getBudgetTypeReducer(state).newBudgetSubType;
}

export function getBudgetTypes(state: State): Array<any> {
  return getBudgetTypeReducer(state).budgetTypes;
}

export function getBudgetTypeCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["budgetType", "budgetTypeCRUDState"]);
}
