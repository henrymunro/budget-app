// @flow
import { Record } from "immutable";

export type SaveStateType = {
  isSaving: boolean,
  saved: boolean,
  lastSaved?: string,
  error: boolean
};

export default class SaveState extends Record({
  isSaving: false,
  saved: false,
  lastSaved: null,
  error: false
})<SaveStateType> {}
