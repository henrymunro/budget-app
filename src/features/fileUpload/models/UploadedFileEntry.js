// @flow

import { Record } from "immutable";

export type UploadedFileEntryType = {
  balance: string,
  date: string | date,
  description: string,
  paidIn: string,
  paidOut: string,
  transactionType: string
};

export default class UploadedFileEntry extends Record({
  balance: "",
  date: "",
  description: "",
  paidIn: "",
  paidOut: "",
  transactionType: ""
})<UploadedFileEntryType> {}
