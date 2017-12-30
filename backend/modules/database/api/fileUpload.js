// @flow

import FileUploadModel from "../models/fileUploadModel";
// import FileUploadContentsModel from "../models/fileUploadContentsModel";
import LedgerModel from "../models/ledgerModel";

import type {
  FileUploadType,
  RecievedFileUploadType
} from "../types/fileUploadType";

import type { FileUploadContentsType } from "../types/fileUploadContentsType";
import { getDefault as getDefaultBudgetType } from "./budgetTypes";

const debug = require("debug")("database:api-fileUpload");

const saveNewFileUpload = async (file: FileUploadType) => {
  debug("Recieved request to save new file upload to DB");
  const output = await FileUploadModel.create(file);
  return output;
};

const saveNewFileUploadContents = async (
  fileContents: Array<FileUploadContentsType>,
  _fileUploadId: string
) => {
  debug("Saving file conents to ledger");
  const defaultBudgetType = await getDefaultBudgetType();
  const contentsWithId = fileContents.map(row => {
    const { type, subType, _typeId } = row;
    if (!type || !subType || !_typeId) {
      return {
        ...row,
        _fileUploadId,
        type: defaultBudgetType.type,
        subType: defaultBudgetType.subType,
        _typeId: defaultBudgetType._id
      };
    }
    return { ...row, _fileUploadId };
  });
  const outputs = await LedgerModel.create(contentsWithId);
  return outputs;
};

export const saveNewFileFlow = async (file: RecievedFileUploadType) => {
  const { content, ...otherFileDetails } = file;
  let fileUploadOutput, ledgerOutput;
  try {
    fileUploadOutput = await saveNewFileUpload({ ...otherFileDetails });
  } catch (err) {
    debug("Error saving file upload to DB: ", err);
    throw new Error(err);
  }
  try {
    ledgerOutput = await saveNewFileUploadContents(
      content,
      fileUploadOutput._id
    );
  } catch (err) {
    debug("Error saving file upload contents to DB: ", err);
    throw new Error(err);
  }
  return {
    fileUploadOutput,
    ledgerOutput
  };
};
