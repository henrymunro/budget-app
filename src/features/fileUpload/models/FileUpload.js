// @flow
import { Record, List } from "immutable";

import UploadedFileEntry from "./UploadedFileEntry";
import SaveFile from "./SaveFile";

export type FileUploadType = {
  parsedFile: List<UploadedFileEntry>,
  errorParsingFile: ?string,
  saveFile: SaveFile,
  uploadedFiles: List<any>
};

export default class FileUpload extends Record({
  parsedFile: List([]),
  errorParsingFile: null,
  saveFile: new SaveFile(),
  uploadedFiles: List()
})<FileUploadType> {}
