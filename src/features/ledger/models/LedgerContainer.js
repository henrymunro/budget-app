// @flow
import { Record, List } from "immutable";
import type { LedgerType } from "../../../../backend/modules/database";

export type LedgerContainerType = {
  ledger: Array<LedgerType>
};

export type LedgerGroupedByMonthType = {
  month: string,
  amount: number,
  items: Array<LedgerType>,
  types: Array<{
    type: string,
    amount: number,
    items: Array<LedgerType>
  }>
};

export default class LedgerContainer extends Record({
  ledger: List([])
})<LedgerContainerType> {}
