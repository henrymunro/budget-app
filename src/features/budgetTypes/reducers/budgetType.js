// @flow
import BudgetTypeContainer from "../models/BudgetTypeContainer";
import { List } from "immutable";

import { combineReducers } from "redux-immutable";
import { makeFetchStateReducer } from "common/reducerUtils/reducers/fetchState";
import { makeSaveStateReducer } from "common/reducerUtils/reducers/saveState";
import { actionTypes } from "../actions";

const budgetTypeFetchState = makeFetchStateReducer(
  "budgetType",
  "budget/budgetTypes/"
);

const budgetTypeSaveState = makeSaveStateReducer(
  "budgetType",
  "budget/budgetTypes/"
);

const budgetTypeReducer = (budgetType = new BudgetTypeContainer(), action) => {
  switch (action.type) {
    case actionTypes.UPDATE_NEW_BUDGET_TYPE:
      return budgetType.set("newBudgetType", action.payload);
    case actionTypes.UPDATE_NEW_BUDGET_SUB_TYPE:
      return budgetType.set("newBudgetSubType", action.payload);
    case actionTypes.FETCH_BUDGETTYPE_FULFILLED:
      return budgetType.set("budgetTypes", List(action.payload.data));
    default:
      return budgetType;
  }
};

export default combineReducers({
  budgetTypeReducer,
  budgetTypeFetchState,
  budgetTypeSaveState
});
