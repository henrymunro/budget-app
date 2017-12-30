// @flow
import MappingContainer from "../models/MappingContainer";
import { List } from "immutable";

import { combineReducers } from "redux-immutable";
import makeWebApiCRUDStateReducer from "common/reducerUtils/reducers/webApiCRUDState";
import { actionTypes } from "../actions";
import { removeIdFromList } from "common/utils";

const mappingCRUDState = makeWebApiCRUDStateReducer(
  "mapping",
  "budget/mappings/"
);

const mappingReducer = (mapping = new MappingContainer(), action) => {
  switch (action.type) {
    case actionTypes.UPDATE_NEW_MAPPING_NAME:
      return mapping.set("newMappingName", action.payload);
    case actionTypes.UPDATE_NEW_MAPPING_ALIAS:
      return mapping.set("newMappingAlias", action.payload);
    case actionTypes.UPDATE_NEW_MAPPING_TYPE:
      return mapping.set("newMappingType", action.payload);
    case actionTypes.FETCH_MAPPING_FULFILLED:
      return mapping.set("mappings", List(action.payload.data));
    case actionTypes.DELETE_MAPPING_FULFILLED:
      return removeIdFromList(mapping, "mappings", action.payload.data._id);
    default:
      return mapping;
  }
};

export default combineReducers({
  mappingReducer,
  mappingCRUDState
});
