/* @flow */
import SaveState from "../models/SaveState";
import makeSaveStateActionsTypes from "../actions/saveStateActionTypes";
import moment from "moment";

export const makeSaveStateReducer = (
  name: string,
  path: string = "budget/"
) => {
  return (saveState: SaveState = new SaveState(), action: Object) => {
    const capsName = name.toUpperCase();
    const actionTypes = makeSaveStateActionsTypes(name, path);

    switch (action.type) {
      case actionTypes[`SAVE_${capsName}_PENDING`]:
        return saveState.set("isSaving", true).set("error", false);
      case actionTypes[`SAVE_${capsName}_FULFILLED`]:
        return saveState
          .set("saved", true)
          .set("error", false)
          .set("isSaving", false)
          .set("lastSaved", moment().format());
      case actionTypes[`SAVE_${capsName}_ERROR`]:
        return saveState.set("isSaving", false).set("error", true);
      default:
        return saveState;
    }
  };
};
