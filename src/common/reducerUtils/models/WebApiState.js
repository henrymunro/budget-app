// @flow
import { Record } from "immutable";

export type WebApiStateType = {
  pending: boolean,
  sucessful: boolean,
  last?: string,
  error: boolean
};

export default class WebApiState extends Record({
  pending: false,
  sucessful: false,
  last: null,
  error: false
})<WebApiStateType> {}
