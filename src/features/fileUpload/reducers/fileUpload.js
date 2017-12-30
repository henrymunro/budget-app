// @flow
import FileUpload from "../models/FileUpload";
import SaveFile from "../models/SaveFile";
import { List, Map } from "immutable";

import { combineReducers } from "redux-immutable";
import makeWebApiCRUDStateReducer from "common/reducerUtils/reducers/webApiCRUDState";
import { actionTypes } from "../actions";
import type { MappingType } from "../../mappings";
import { applyMapping } from "common/utils/mapping";

const uploadedFilesCRUDState = makeWebApiCRUDStateReducer(
  "uploadedFiles",
  "budget/fileUpload/"
);

const fileUploadReducer = (fileUpload = new FileUpload(), action) => {
  switch (action.type) {
    case actionTypes.PARSED_FILE:
      const { parsedFile, fileDetails, mappings } = action.payload;
      const saveFile = transfromFileForSaving(
        parsedFile,
        fileDetails,
        mappings
      );
      return fileUpload
        .set("parsedFile", List(parsedFile))
        .set("saveFile", saveFile);
    case actionTypes.ERROR_PARSING_FILE:
      return fileUpload.set("errorParsingFile", action.payload.error);
    case actionTypes.FETCH_UPLOADEDFILES_FULFILLED:
      return fileUpload.set("uploadedFiles", List(action.payload.data));
    default:
      return fileUpload;
  }
};

const transfromFileForSaving = (
  file,
  fileDetails,
  mappings: Array<MappingType>
) => {
  const transformedFile = file.map(row => {
    const { date, description, paidIn, paidOut, ...other } = row;
    const strippedPaidIn = Number(paidIn.replace("£", "")) || 0;
    const strippedPaidOut = Number(paidOut.replace("£", "")) || 0;
    const { type, subType, _id } = applyMapping(String(description), mappings);
    return {
      date,
      description: String(description),
      amount: strippedPaidIn - strippedPaidOut,
      type,
      subType,
      _typeId: _id,
      other: {
        ...other,
        paidInOrigional: paidIn,
        paidOutOrigional: paidOut,
        paidIn: strippedPaidIn,
        paidOut: strippedPaidOut
      }
    };
  });
  const {
    name: fileName,
    type: fileType,
    lastModifiedDate,
    ...otherFileDetails
  } = fileDetails;
  const saveFile = new SaveFile({
    currency: "£",
    uploadTime: new Date(),
    content: List(transformedFile),
    tags: List(["Nationwide"]),
    fileName,
    fileType,
    lastModifiedDate,
    otherDetails: Map(otherFileDetails)
  });
  return saveFile;
};

export default combineReducers({
  fileUploadReducer,
  uploadedFilesCRUDState
});
