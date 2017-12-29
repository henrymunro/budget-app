// @flow
import type { State } from "common/types";
import WebApiCRUDState from "common/reducerUtils/models/WebApiCRUDState";
import FileUpload from "../models/FileUpload";
import SaveFile from "../models/SaveFile";

export function getFileUpload(state: State): FileUpload {
  return state.getIn(["fileUpload", "fileUploadReducer"]);
}

export function getParsedFile(state: State): Object {
  return getFileUpload(state).parsedFile;
}

export function getSaveFile(state: State): SaveFile {
  return getFileUpload(state).saveFile;
}

export function getErrorParsingFile(state: State): boolean {
  return getFileUpload(state).errorParsingFile;
}

export function getUploadedFiles(state: State): Object {
  return getFileUpload(state).uploadedFiles;
}

export function getUploadedFilesCRUDState(state: State): WebApiCRUDState {
  return state.getIn(["fileUpload", "uploadedFilesCRUDState"]);
}
