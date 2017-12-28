// @flow
import { Record } from "immutable";

export type FetchStateType = {
  isFetching: boolean,
  fetched: boolean,
  lastFetched?: string,
  error: boolean
};

export default class FetchState extends Record({
  isFetching: false,
  fetched: false,
  lastFetched: null,
  error: false
})<FetchStateType> {}
