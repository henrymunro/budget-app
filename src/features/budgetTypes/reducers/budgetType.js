// @flow
import BudgetTypeContainer from "../models/BudgetTypeContainer";
import { List } from "immutable";

import { combineReducers } from "redux-immutable";
import makeWebApiCRUDStateReducer from "common/reducerUtils/reducers/webApiCRUDState";
import { actionTypes } from "../actions";
import { removeIdFromList, addNewItemToList } from "common/utils";

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
    case actionTypes.SAVE_BUDGETTYPE_FULFILLED:
      return addNewItemToList(budgetType, "budgetTypes", action.payload.data)
        .set("newBudgetType", null)
        .set("newBudgetSubType", null);
    case actionTypes.DELETE_BUDGETTYPE_FULFILLED:
      return removeIdFromList(
        budgetType,
        "budgetTypes",
        action.payload.data._id
      );

    default:
      return budgetType;
  }
};

export default combineReducers({
  budgetTypeReducer,
  budgetTypeCRUDState
});
