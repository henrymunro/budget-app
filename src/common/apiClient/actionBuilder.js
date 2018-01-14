// @flow

import { APIClientRouteBuilder } from "common/apiClient";

export default (route: string, actionTypes: Object, actionName?: string) => {
  const actionTypeNameLowerCase = actionName || route;
  const actionTypeName = actionTypeNameLowerCase.toUpperCase();
  const apiRoutes = new APIClientRouteBuilder(route);

  const fetchAction = () => ({
    type: actionTypes[`FETCH_${actionTypeName}`],
    payload: apiRoutes.fetch()
  });

  const saveAction = objectToSave => ({
    type: actionTypes[`SAVE_${actionTypeName}`],
    payload: apiRoutes.save(objectToSave)
  });

  const deleteAction = (_id: string) => ({
    type: actionTypes[`DELETE_${actionTypeName}`],
    payload: apiRoutes.delete(_id)
  });

  const updateAction = (objectToUpdate: { _id: string }) => ({
    type: actionTypes[`UPDATE_${actionTypeName}`],
    payload: apiRoutes.update(objectToUpdate)
  });

  const multiupdateAction = updates => ({
    type: actionTypes[`MULTIUPDATE_${actionTypeName}`],
    payload: apiRoutes.multiupdate(updates)
  });

  return {
    fetchAction,
    saveAction,
    deleteAction,
    updateAction,
    multiupdateAction
  };
};
