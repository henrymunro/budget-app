// @flow
import { Record } from "immutable";

export type WebApiStataType = {
  pending: boolean,
  sucessful: boolean,
  last?: string,
  error: boolean
};

export default class FetchWebApiStata extends Record({
  pending: false,
  sucessful: false,
  last: null,
  error: false
})<WebApiStataType> {}
