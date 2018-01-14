import WebApiState from "common/reducerUtils/models/WebApiState";

export function getFetchState(state): WebApiState {
  return state.get("fetch");
}

export function getSaveState(state): WebApiState {
  return state.get("save");
}

export function getDeleteState(state): WebApiState {
  return state.get("delete");
}

export function getUpdateState(state): WebApiState {
  return state.get("update");
}

export function getMultiupdateState(state): WebApiState {
  return state.get("multiupdate");
}
