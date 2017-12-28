// @flow

import makeFetchStateActionsTypes from "common/reducerUtils/actions/fetchStateActionTypes";
import api from "common/webAPI";

const uploadedFilesActionTypes = makeFetchStateActionsTypes(
  "uploadedFiles",
  "budget/fileUpload/"
);

export const actionTypes = {
  PARSED_FILE: "budget/fileUpload/PARSED_FILE",
  ERROR_PARSING_FILE: "budget/fileUpload/ERROR_PARSING_FILE",
  // Web API
  ...uploadedFilesActionTypes,
  SAVE_UPLOADEDFILE: "budget/file/SAVE_UPLOADEDFILE"
};

export function onFileParse(parsedFile: Array<Object>, fileDetails: Object) {
  return {
    type: actionTypes.PARSED_FILE,
    payload: { parsedFile, fileDetails }
  };
}

export function onFileParseError(error: string) {
  return {
    type: actionTypes.ERROR_PARSING_FILE,
    payload: { error }
  };
}

// Web API Interface

export function fetchUploadedFiles() {
  return {
    type: uploadedFilesActionTypes.FETCH_UPLOADEDFILES,
    payload: api.fileUpload.getUploadedFiles()
  };
}

export function saveUploadedFile(file) {
  return {
    type: actionTypes.SAVE_UPLOADEDFILE,
    payload: api.fileUpload.saveUploadedFile(file)
  };
}
