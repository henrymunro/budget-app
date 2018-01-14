// @flow
import { Record, List, Map } from "immutable";
import type { BudgetTypeType } from "../../budgetTypes";

export type MappingType = {
  _id?: string,
  mapping: string,
  alias: string,
  _typeId: string,
  type: string,
  subType: string
};

export type SuggestedMappingType = {
  description: string,
  alias?: string,
  count: number
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
  newMappingType: Map({ type: null, subType: null, _id: null })
})<MappingContainerType> {}
