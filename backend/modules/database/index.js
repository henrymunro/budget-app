// @flow

import ExpressDatabaseInterface from "./api/ExpressDatabaseInterface";
import BudgetTypeModel from "./models/budgetTypesModel";

import type { GetOptionsType } from "./types/GetOptionsType";
import type {
  FileUploadType,
  RecievedFileUploadType
} from "./types/FileUploadType";
import type { FileUploadContentsType } from "./types/FileUploadContentsType";

export type { GetOptionsType };
export type { FileUploadType };
export type { RecievedFileUploadType };
export type { FileUploadContentsType };

export { default as databaseApi } from "./api";
export { default as models } from "./models";

export const BudgetTypeCRUD = new ExpressDatabaseInterface(BudgetTypeModel);
export { ExpressDatabaseInterface };
