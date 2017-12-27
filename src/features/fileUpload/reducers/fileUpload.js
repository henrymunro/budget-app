// @flow
import FileUpload from "../models/FileUpload";
import { List } from "immutable";

import { actionTypes } from "../actions";

export default (fileUpload = new FileUpload(), action) => {
  switch (action.type) {
    case actionTypes.PARSED_FILE:
      return fileUpload.set("parsedFile", List(action.payload.parsedFile));
    case actionTypes.ERROR_PARSING_FILE:
      return fileUpload.set("errorParsingFile", action.payload.error);
    default:
      return fileUpload;
  }
};
