// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import type { GroupedBudgetTypesType } from "../models/BudgetTypeContainer";

export function getBudgetTypeReducer(state: State) {
  return state.getIn(["budgetType", "budgetTypeReducer"]);
}

export function getNewBudgetType(state: State): string {
  return getBudgetTypeReducer(state).newBudgetType;
}

export function getNewBudgetSubType(state: State): string {
  return getBudgetTypeReducer(state).newBudgetSubType;
}

export function getBudgetTypes(state: State): Array<GroupedBudgetTypesType> {
  const budgetTypes = getBudgetTypeReducer(state).budgetTypes;
  const distinctTypes = budgetTypes
    .map(elm => elm.type)
    .filter((item, i, ar) => ar.indexOf(item) === i)
    .sort();

  const groupedSubTypes = distinctTypes.map(type => {
    const subTypes = budgetTypes.filter(item => item.type === type);
    return {
      type,
      subTypes
    };
  });

  return groupedSubTypes;
}

export function getBudgetTypeCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["budgetType", "budgetTypeCRUDState"]);
}
