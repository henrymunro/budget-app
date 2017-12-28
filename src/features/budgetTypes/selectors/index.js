// @flow
import type { State } from "common/types";
import FetchState from "common/reducerUtils/models/FetchState";
import SaveState from "common/reducerUtils/models/SaveState";

export function getBudgetTypeReducer(state: State): FileUpload {
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

export function getBudgetTypesFetchState(state: State): FetchState {
  return state.getIn(["budgetType", "budgetTypeFetchState"]);
}

export function getBudgetTypeSaveState(state: State): SaveState {
  return state.getIn(["budgetType", "budgetTypeSaveState"]);
}
