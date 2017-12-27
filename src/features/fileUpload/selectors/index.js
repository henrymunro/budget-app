// @flow
import type { State } from "common/types";
// import FileUpload from "../models/FileUpload";

export function getParsedFile(state: State): Object {
  return state.getIn(["fileUpload", "parsedFile"]);
}

export function getErrorParsingFile(state: State): boolean {
  return state.getIn(["fileUpload", "errorParsingFile"]);
}
