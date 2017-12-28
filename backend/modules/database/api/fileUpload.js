// @flow

import FileUploadModel from "../models/fileUploadModel";
import FileUploadContentsModel from "../models/fileUploadContentsModel";
import LedgerModel from "../models/ledgerModel";

import type {
  FileUploadType,
  RecievedFileUploadType
} from "../types/fileUploadType";

import type { FileUploadContentsType } from "../types/fileUploadContentsType";

const debug = require("debug")("databaseAPI:fileUpload");

const saveNewFileUpload = async (file: FileUploadType) => {
  debug("Recieved request to save new file upload to DB");
  const output = await FileUploadModel.create(file);
  return output;
};

const saveNewFileUploadContents = async (
  fileContents: Array<FileUploadContentsType>,
  _fileUploadId: string
) => {
  debug("Saving file conents");
  const contentsWithId = fileContents.map(row => ({ ...row, _fileUploadId }));
  const outputs = await FileUploadContentsModel.create(contentsWithId);
  console.log("OUTPUTS: ", outputs);
  return outputs;
};

export const saveNewFileFlow = async (file: RecievedFileUploadType) => {
  const { content, ...otherFileDetails } = file;
  let fileUploadOutput, fileUploadContentsOutput;
  try {
    fileUploadOutput = await saveNewFileUpload({ ...otherFileDetails });
  } catch (err) {
    debug("Error saving file upload to DB: ", err);
    throw new Error(err);
  }
  try {
    fileUploadContentsOutput = await saveNewFileUploadContents(
      content,
      fileUploadOutput._id
    );
  } catch (err) {
    debug("Error saving file upload contents to DB: ", err);
    throw new Error(err);
  }
  return {
    fileUploadOutput,
    fileUploadContentsOutput
  };
};
