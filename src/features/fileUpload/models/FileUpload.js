// @flow
import { Record, List } from "immutable";

import FileUploadEntry from "./FileUploadEntry";

export type FileUploadType = {
  parsedFile: List<FileUploadEntry>,
  errorParsingFile: ?string
};

export default class FileUpload extends Record({
  parsedFile: List([]),
  errorParsingFile: null
})<FileUploadType> {}
