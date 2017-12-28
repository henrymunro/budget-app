// @flow
import { Record, List, Map } from "immutable";

import SaveFileEntry from "./SaveFileEntry";

export type SaveFileType = {
  content: List<SaveFileEntry>,
  currency: "£" | "$",
  uploadTime?: Date,
  tags: List<string>,
  fileName: string,
  fileType: string,
  lastModifiedDate?: Date,
  otherDetails: File
};

export default class SaveFile extends Record({
  content: List([]),
  currency: "£",
  uploadTime: null,
  tags: List([]),
  fileName: "",
  fileType: "",
  lastModifiedDate: null,
  otherDetails: Map({})
})<SaveFileType> {}
