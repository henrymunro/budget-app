// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import type { SuggestedMappingType } from "../models/MappingContainer";

import groupBy from "common/utils/groupBy";
import type { BudgetTypeType } from "../../budgetTypes";
import { getLedger, getLedgerEdits } from "../../ledger";

export function getMappingReducer(state: State) {
  return state.getIn(["mapping", "mappingReducer"]);
}

export function getNewMappingName(state: State): string {
  return getMappingReducer(state).newMappingName;
}

export function getNewMappingAlias(state: State): string {
  return getMappingReducer(state).newMappingAlias;
}

export function getNewMappingType(state: State): BudgetTypeType {
  return getMappingReducer(state).newMappingType;
}

export function getMappings(state: State): BudgetTypeType {
  return getMappingReducer(state).mappings;
}

export function getMappingCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["mapping", "mappingCRUDState"]);
}

export function getSuggestedMappings(
  state: State
): Array<SuggestedMappingType> {
  const ledger = getLedger(state).toJS();
  const unmapped = ledger.filter(elm => !elm.mapingAlias);
  const grouped = groupBy
    .count(unmapped, "description")
    .sort((a, b) => b.count - a.count);
  return grouped;
}

export function getMappingsLedgerUpdates(
  state: State
): Array<SuggestedMappingType> {
  const ledgerEdits = getLedgerEdits(state).toJS();
  console.log("HERE: ", { ledgerEdits });
  const grouped = groupBy
    .groupLedgerByMapping(ledgerEdits)
    .sort((a, b) => b.count - a.count);
  return grouped;
}
