// @flow

import { Record } from "immutable";

export type FileUploadEntryType = {
  balance: string,
  date: string | date,
  description: string,
  paidIn: string,
  paidOut: string,
  transactionType: string
};

export default class FileUploadEntry extends Record({
  balance: "",
  date: "",
  description: "",
  paidIn: "",
  paidOut: "",
  transactionType: ""
})<FileUploadEntry> {}
