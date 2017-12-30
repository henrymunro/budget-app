// @flow

import { Record } from "immutable";

export type SaveFileEntryType = {
  date: string | Date,
  description: string,
  mappingAlias?: string,
  type?: string,
  subType?: string,
  amount: number,
  otherDetails: Object
};

export default class SaveFileEntry extends Record({
  date: "",
  description: "",
  mappingAlias: null,
  type: null,
  subType: null,
  amount: 0,
  otherDetails: {}
})<SaveFileEntryType> {}
