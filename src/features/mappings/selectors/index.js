// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";

import type { BudgetTypeType } from "../../budgetTypes";

export function getMappingReducer(state: State) {
  return state.getIn(["mapping", "mappingReducer"]);
}

export function getNewMappingName(state: State): string {
  return getMappingReducer(state).newMappingName;
}

export function getNewMappingAlias(state: State): string {
  return getMappingReducer(state).newMappingAlias;
}

export function getNewMappingType(state: State): BudgetTypeType {
  return getMappingReducer(state).newMappingType;
}

export function getMappings(state: State): BudgetTypeType {
  return getMappingReducer(state).mappings;
}

export function getMappingCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["mapping", "mappingCRUDState"]);
}
