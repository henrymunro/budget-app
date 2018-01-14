// @flow

import { Record } from "immutable";
import WebApiState from "./WebApiState";

export type WebApiCRUDStateType = {
  fetch: WebApiState,
  save: WebApiState,
  delete: WebApiState,
  update: WebApiState,
  multiupdate: WebApiState
};

export default class WebApiCRUDState extends Record({
  fetch: new WebApiState(),
  save: new WebApiState(),
  delete: new WebApiState(),
  update: new WebApiState(),
  multiupdate: new WebApiState()
})<WebApiCRUDStateType> {}
