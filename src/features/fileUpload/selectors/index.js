// @flow
import type { State } from "common/types";
import FileUpload from "../models/FileUpload";
import SaveFile from "../models/SaveFile";

export function getFileUpload(state: State): FileUpload {
  return state.get("fileUpload");
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
