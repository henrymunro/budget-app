// @flow
import { Record, List } from "immutable";
import type { BudgetTypeType } from "../../budgetTypes";

export type MappingType = {
  _id?: string,
  mapping: string,
  alias: string,
  _typeId: string,
  type: string,
  subType: string
};

export type MappingContainerType = {
  mappings: Array<MappingType>,
  newMappingName?: string,
  newMappingAlias?: string,
  newMappingType?: BudgetTypeType
};

export default class MappingContainer extends Record({
  mappings: List([]),
  newMappingName: null,
  newMappingAlias: null,
  newMappingType: null
})<MappingContainerType> {}
