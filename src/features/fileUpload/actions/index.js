// @flow

import makeWebApiCRUDActionTypes from "common/reducerUtils/actions/webApiCRUDActionTypes";
import APIClientActionBuilder from "common/apiClient";
import type { MappingType } from "../../mappings";

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

export function onFileParse(
  parsedFile: Array<Object>,
  fileDetails: Object,
  mappings: Array<MappingType>
) {
  return {
    type: actionTypes.PARSED_FILE,
    payload: { parsedFile, fileDetails, mappings }
  };
}

export function onFileParseError(error: string) {
  return {
    type: actionTypes.ERROR_PARSING_FILE,
    payload: { error }
  };
}

// Web API Interface

export const uploadedFilesCRUDActions = APIClientActionBuilder(
  "fileUpload",
  uploadedFilesCRUDActionTypes,
  "uploadedFiles"
);
