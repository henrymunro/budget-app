// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";

export function getLedgerReducer(state: State) {
  return state.getIn(["ledger", "ledgerReducer"]);
}

export function getLedger(state: State): string {
  return getLedgerReducer(state).ledger;
}

export function getLedgerCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["ledger", "ledgerCRUDState"]);
}
