// @flow

import makeWebApiStateActionsTypes from "./webApiStateActionTypes";

export default (name: string, path: string = "budget/") => {
  const capsName = name.toUpperCase();

  const fetchActionTypes = makeWebApiStateActionsTypes(capsName, path, "FETCH");
  const saveActionTypes = makeWebApiStateActionsTypes(capsName, path, "SAVE");
  const deleteActionTypes = makeWebApiStateActionsTypes(
    capsName,
    path,
    "DELETE"
  );
  const updateActionTypes = makeWebApiStateActionsTypes(
    capsName,
    path,
    "UPDATE"
  );

  return {
    ...fetchActionTypes,
    ...saveActionTypes,
    ...deleteActionTypes,
    ...updateActionTypes
  };
};
