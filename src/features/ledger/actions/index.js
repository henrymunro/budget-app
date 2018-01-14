// @flow

import makeWebApiCRUDActionTypes from "common/reducerUtils/actions/webApiCRUDActionTypes";
import APIClientActionBuilder from "common/apiClient";

const ledgerCRUDActionTypes = makeWebApiCRUDActionTypes(
  "ledger",
  "budget/ledger/"
);

export const actionTypes = {
  // Web API
  ...ledgerCRUDActionTypes,
  APPLY_MAPPINGS_TO_ALL_LEDGER_ITEMS:
    "budget/ledger/APPLY_MAPPINGS_TO_ALL_LEDGER_ITEMS"
};

export const applyMappingsToAllLedgerItems = mappings => {
  return {
    type: actionTypes.APPLY_MAPPINGS_TO_ALL_LEDGER_ITEMS,
    payload: {
      mappings
    }
  };
};

// Web API Interface

export const ledgerCRUDActions = APIClientActionBuilder(
  "ledger",
  ledgerCRUDActionTypes
);
