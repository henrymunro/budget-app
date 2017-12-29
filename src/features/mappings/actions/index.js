// @flow

import makeWebApiCRUDActionTypes from "common/reducerUtils/actions/webApiCRUDActionTypes";
import APIClientActionBuilder from "common/apiClient";

import type { BudgetTypeType } from "../../budgetTypes";

const mappingCRUDActionTypes = makeWebApiCRUDActionTypes(
  "mapping",
  "budget/mappings/"
);

export const actionTypes = {
  UPDATE_NEW_MAPPING_NAME: "budget/mappings/UPDATE_NEW_MAPPING_NAME",
  UPDATE_NEW_MAPPING_ALIAS: "budget/mappings/UPDATE_NEW_MAPPING_ALIAS",
  UPDATE_NEW_MAPPING_TYPE: "budget/mappings/UPDATE_NEW_MAPPING_TYPE",
  // Web API
  ...mappingCRUDActionTypes
};

export function updateNewMappingName(input: string) {
  return {
    type: actionTypes.UPDATE_NEW_MAPPING_NAME,
    payload: input
  };
}

export function updateNewMappingAlias(input: string) {
  return {
    type: actionTypes.UPDATE_NEW_MAPPING_ALIAS,
    payload: input
  };
}

export function updateNewMappingType(type: BudgetTypeType) {
  return {
    type: actionTypes.UPDATE_NEW_MAPPING_TYPE,
    payload: type
  };
}

// Web API Interface

export const mappingCRUDActions = APIClientActionBuilder(
  "mapping",
  mappingCRUDActionTypes
);
