// @flow

import makeWebApiCRUDActionTypes from "common/reducerUtils/actions/webApiCRUDActionTypes";
import api from "common/webAPI";

const uploadedFilesCRUDActionTypes = makeWebApiCRUDActionTypes(
  "uploadedFiles",
  "budget/fileUpload/"
);

export const actionTypes = {
  PARSED_FILE: "budget/fileUpload/PARSED_FILE",
  ERROR_PARSING_FILE: "budget/fileUpload/ERROR_PARSING_FILE",
  // Web API
  ...uploadedFilesCRUDActionTypes
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
    type: uploadedFilesCRUDActionTypes.FETCH_UPLOADEDFILES,
    payload: api.fileUpload.getUploadedFiles()
  };
}

export function saveUploadedFile(file) {
  return {
    type: uploadedFilesCRUDActionTypes.SAVE_UPLOADEDFILE,
    payload: api.fileUpload.saveUploadedFile(file)
  };
}
