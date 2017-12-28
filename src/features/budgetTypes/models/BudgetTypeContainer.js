// @flow
import { Record, List } from "immutable";

export type BudgetType = {
  _id: string,
  type: string,
  subType: string
};

export type BudgetTypeContainerType = {
  budgetTypes: Array<BudgetType>,
  newBudgetType?: string,
  newBudgetSubType?: string
};

export default class BudgetTypeContainer extends Record({
  budgetTypes: List([]),
  newBudgetType: null,
  newBudgetSubType: null
})<BudgetTypeContainerType> {}
