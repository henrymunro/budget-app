// @flow

import { Record } from "immutable";

export type SaveFileEntryType = {
  date: string | Date,
  description: string,
  amount: number,
  otherDetails: Object
};

export default class SaveFileEntry extends Record({
  date: "",
  description: "",
  amount: 0,
  otherDetails: {}
})<SaveFileEntryType> {}