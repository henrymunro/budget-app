// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import groupBy from "common/utils/groupBy";

export function getLedgerReducer(state: State) {
  return state.getIn(["ledger", "ledgerReducer"]);
}

export function getLedger(state: State): string {
  return getLedgerReducer(state).ledger;
}

export function getLedgerGroupedByMonth(state: State) {
  const ledger = getLedger(state).toJS();
  if (ledger && ledger.length > 0) {
    return groupBy.groupByMonth(ledger);
  }
  return ledger;
}

export function getLedgerGroupedByType(state: State) {
  const ledger = getLedger(state).toJS();
  if (ledger && ledger.length > 0) {
    return groupBy.groupByType(ledger);
  }
  return ledger;
}

export function getLedgerCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["ledger", "ledgerCRUDState"]);
}
