/* @flow */
import { combineReducers } from "redux-immutable";
import makeWebApiStateReducer from "common/reducerUtils/reducers/webApiState";

const makeWebApiCRUDStateReducer = (name: string, path: string = "budget/") => {
  const capsName = name.toUpperCase();

  const fetchStateReducer = makeWebApiStateReducer(capsName, path, "FETCH");
  const saveStateReducer = makeWebApiStateReducer(capsName, path, "SAVE");
  const deleteStateReducer = makeWebApiStateReducer(capsName, path, "DELETE");
  const updateStateReducer = makeWebApiStateReducer(capsName, path, "UPDATE");

  return combineReducers({
    fetch: fetchStateReducer,
    save: saveStateReducer,
    delete: deleteStateReducer,
    update: updateStateReducer
  });
};

export default makeWebApiCRUDStateReducer;
