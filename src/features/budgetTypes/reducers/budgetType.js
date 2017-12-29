// @flow
import BudgetTypeContainer from "../models/BudgetTypeContainer";
import { List } from "immutable";

import { combineReducers } from "redux-immutable";
import makeWebApiCRUDStateReducer from "common/reducerUtils/reducers/webApiCRUDState";
import { actionTypes } from "../actions";

const budgetTypeCRUDState = makeWebApiCRUDStateReducer(
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
    case actionTypes.DELETE_BUDGETTYPE_FULFILLED:
      const { _id } = action.payload.data;
      return budgetType.set(
        "budgetTypes",
        budgetType.get("budgetTypes").filterNot(type => type._id === _id)
      );
    default:
      return budgetType;
  }
};

export default combineReducers({
  budgetTypeReducer,
  budgetTypeCRUDState
});
