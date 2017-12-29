// @flow
import { Record, List } from "immutable";

export type BudgetTypeType = {
  _id: string,
  type: string,
  subType: string
};

export type GroupedBudgetTypesType = {
  type: string,
  subTypes: Array<{
    type: string,
    subType: string,
    _id: string
  }>
};

export type BudgetTypeContainerType = {
  budgetTypes: Array<BudgetTypeType>,
  newBudgetType?: string,
  newBudgetSubType?: string
};

export default class BudgetTypeContainer extends Record({
  budgetTypes: List([]),
  newBudgetType: null,
  newBudgetSubType: null
})<BudgetTypeContainerType> {}
