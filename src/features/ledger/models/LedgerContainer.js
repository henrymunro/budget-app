// @flow
import { Record, List } from "immutable";
import type { LedgerType } from "../../../../backend/modules/database";

export type LedgerContainerType = {
  ledger: Array<LedgerType>
};

export default class LedgerContainer extends Record({
  ledger: List([])
})<LedgerContainerType> {}
