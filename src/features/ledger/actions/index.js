// @flow

import makeWebApiCRUDActionTypes from "common/reducerUtils/actions/webApiCRUDActionTypes";
import APIClientActionBuilder from "common/apiClient";

const ledgerCRUDActionTypes = makeWebApiCRUDActionTypes(
  "ledger",
  "budget/ledger/"
);

export const actionTypes = {
  // Web API
  ...ledgerCRUDActionTypes
};

// Web API Interface

export const ledgerCRUDActions = APIClientActionBuilder(
  "ledger",
  ledgerCRUDActionTypes
);
