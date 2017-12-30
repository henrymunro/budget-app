// @flow

import ExpressDatabaseInterface from "./api/ExpressDatabaseInterface";
import BudgetTypeModel from "./models/budgetTypesModel";

import type { GetOptionsType } from "./types/GetOptionsType";
import type {
  FileUploadType,
  RecievedFileUploadType
} from "./types/FileUploadType";
import type { FileUploadContentsType } from "./types/FileUploadContentsType";
import type { LedgerType } from "./types/LedgerType";

export type {
  GetOptionsType,
  FileUploadType,
  RecievedFileUploadType,
  FileUploadContentsType,
  LedgerType
};

export { default as databaseApi } from "./api";
export { default as models } from "./models";

export const BudgetTypeCRUD = new ExpressDatabaseInterface(BudgetTypeModel);
export { ExpressDatabaseInterface };
