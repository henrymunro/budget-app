// @flow
import { Record, List, Map } from "immutable";

import SaveFileEntry from "./SaveFileEntry";

export type SaveFileType = {
  content: List<SaveFileEntry>,
  currency: "£" | "$",
  uploadTime: Date,
  tags: List<string>,
  fileDetails: File
};

export default class SaveFile extends Record({
  content: List([]),
  currency: "£",
  uploadTime: "",
  tags: List([]),
  fileDetails: Map({})
})<SaveFileType> {}
