// @flow
import LedgerContainer from "../models/LedgerContainer";
import { List } from "immutable";

import { combineReducers } from "redux-immutable";
import makeWebApiCRUDStateReducer from "common/reducerUtils/reducers/webApiCRUDState";
import { actionTypes } from "../actions";
import { removeIdFromList, addNewItemToList, stringMatch } from "common/utils";
import { applyMapping } from "common/utils/mapping";

const ledgerCRUDState = makeWebApiCRUDStateReducer("ledger", "budget/ledger/");

const ledgerReducer = (ledger = new LedgerContainer(), action) => {
  switch (action.type) {
    case actionTypes.FETCH_LEDGER_FULFILLED:
      return ledger
        .set("ledger", List(action.payload.data))
        .set("ledgerEdits", List());
    case actionTypes.SAVE_LEDGER_FULFILLED:
      return addNewItemToList(ledger, "ledger", action.payload.data);
    case actionTypes.DELETE_LEDGER_FULFILLED:
      return removeIdFromList(ledger, "ledger", action.payload.data._id);
    case actionTypes.MULTIUPDATE_LEDGER_FULFILLED:
      return ledger.set("ledgerEdits", List());
    case actionTypes.APPLY_MAPPINGS_TO_ALL_LEDGER_ITEMS:
      return applyMappingsToAllLedgerItems(ledger, action);

    default:
      return ledger;
  }
};

const applyMappingsToAllLedgerItems = (state, action) => {
  const { mappings } = action.payload;
  const ledger = state.get("ledger");
  const ledgerEdits = ledger
    .filter(elm => {
      const aliasCache = elm.mappingAlias;
      const mapped = applyMapping(elm.description, mappings.toJS());
      return !stringMatch(aliasCache, mapped.mappingAlias);
    })
    .map(elm => {
      const mapped = applyMapping(elm.description, mappings.toJS());
      return {
        ...elm,
        ...mapped
      };
    });

  return state.set("ledger", ledger).set("ledgerEdits", ledgerEdits);
};

export default combineReducers({
  ledgerReducer,
  ledgerCRUDState
});
