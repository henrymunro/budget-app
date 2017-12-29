/* @flow */
import WebApiState from "../models/WebApiState";
import makeWebApiActionTypes from "../actions/webApiStateActionTypes";
import moment from "moment";

export const makeWebApiStateReducer = (
  name: string,
  path: string = "budget/",
  callType: string = "FETCH"
) => {
  return (webApiState: WebApiState = new WebApiState(), action: Object) => {
    const capsName = name.toUpperCase();
    let callTypeCaps = callType.toUpperCase();

    if (["FETCH", "SAVE", "DELETE", "UPDATE"].indexOf(callTypeCaps) <= 0)
      callTypeCaps = "FETCH";

    const actionTypes = makeWebApiActionTypes(name, path, callTypeCaps);

    switch (action.type) {
      case actionTypes[`${callTypeCaps}_${capsName}_PENDING`]:
        return webApiState.set("pending", true).set("error", false);
      case actionTypes[`${callTypeCaps}_${capsName}_FULFILLED`]:
        return webApiState
          .set("sucessful", true)
          .set("error", false)
          .set("pending", false)
          .set("last", moment().format());
      case actionTypes[`${callTypeCaps}_${capsName}_ERROR`]:
        return webApiState.set("pending", false).set("error", true);
      default:
        return webApiState;
    }
  };
};
