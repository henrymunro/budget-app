/* @flow */
import FetchState from "../models/FetchState";
import makeFetchStateActionsTypes from "../actions/fetchStateActionTypes";
import moment from "moment";

export const makeFetchStateReducer = (
  name: string,
  path: string = "budget/"
) => {
  return (fetchState: FetchState = new FetchState(), action: Object) => {
    const capsName = name.toUpperCase();
    const actionTypes = makeFetchStateActionsTypes(name, path);

    switch (action.type) {
      case actionTypes[`FETCH_${capsName}_PENDING`]:
        return fetchState.set("isFetching", true).set("error", false);
      case actionTypes[`FETCH_${capsName}_FULFILLED`]:
        return fetchState
          .set("fetched", true)
          .set("error", false)
          .set("isFetching", false)
          .set("lastFetched", moment().format());
      case actionTypes[`FETCH_${capsName}_ERROR`]:
        return fetchState.set("isFetching", false).set("error", true);
      default:
        return fetchState;
    }
  };
};
