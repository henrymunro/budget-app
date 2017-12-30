// @flow
import LedgerContainer from "../models/LedgerContainer";
import { List } from "immutable";

import { combineReducers } from "redux-immutable";
import makeWebApiCRUDStateReducer from "common/reducerUtils/reducers/webApiCRUDState";
import { actionTypes } from "../actions";
import { removeIdFromList, addNewItemToList } from "common/utils";

const ledgerCRUDState = makeWebApiCRUDStateReducer("ledger", "budget/ledger/");

const ledgerReducer = (ledger = new LedgerContainer(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_LEDGER_FULFILLED:
      return ledger.set("ledger", List(action.payload.data));
    case actionTypes.SAVE_LEDGER_FULFILLED:
      return addNewItemToList(ledger, "ledger", action.payload.data);
    case actionTypes.DELETE_LEDGER_FULFILLED:
      return removeIdFromList(ledger, "ledger", action.payload.data._id);

    default:
      return ledger;
  }
};

export default combineReducers({
  ledgerReducer,
  ledgerCRUDState
});
